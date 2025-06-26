// import {  Flex, Text, Button } from "@radix-ui/themes"
import DashboardCards from "@/components/DashboardCards"
import DashboardProductCards from "@/components/DashboardProductCards"
import fertilizer from "../../assets/fertilizer.png"
import pesticides from "../../assets/pesticides.png"
import seeds from "../../assets/seeds.png"
import tractor1 from "../../assets/tractor1.png"
import cartapillar from "../../assets/images/cartapillar.png"
import solar from "../../assets/images/solar.png"
import useSWR from "swr"
import { apiFetcher } from "@/api/client"
import { BeatLoader } from "react-spinners"
import { useState } from "react"
import { Link } from "react-router"

export default function Home() {
    const { data, isLoading, error } = useSWR("/adverts", apiFetcher);
    const [selectedProduct, setSelectedProduct] = useState(0)
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
  <BeatLoader size={80} color="#32BB78" />
</div>
        )
    }

    if (error) {
        return (
            <div>
                <p>Something went wrong</p>
            </div>
        )
    }
const mainProducts = data.slice(0,2)
const otherProducts = data.slice(2)

    return (
      <section className="flex flex-col">
            <DashboardCards />
            <DashboardProductCards />
            <p className="font-lato md:text-3xl font-bold py-15">🔥Hot in the market place</p>
            <div>
                {mainProducts.length > 0 && (
                    <div>
                        {/* Product Details */}
                        <div className="flex md:gap-7">
                            {mainProducts.map((product, index) => (
                                <div
                                    key={product._id || index}
                                    className={`md:w-[500px] bg-white border border-light-border flex flex-col md:px-10 rounded-2xl ${selectedProduct === index ? "ring-2 ring-green-500" : ""}`}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setSelectedProduct(index)}
                                >
                                    <div className="py-3">
                                        {/* You can use product.images?.[0]?.url or a fallback */}
                                        <img src={product.images?.[0]?.url || cartapillar} alt="" className="h-85 w-100 rounded-2xl"/>
                                    </div>
                                    <div className="md:py-5 md:space-y-3">
                                        <h1 className="font-lato text-2xl">{product.productTitle}</h1>
                                        <button className="font-lato md:h-8 md:w-30 rounded-full bg-[#32BB781A] text-sm">{product.category}</button>
                                        <p className="font-lato text-lg">{product.description}</p>
                                        <div className="flex justify-between items-center">
                                            <h1>GHC <span>{product.price}</span></h1>
                                            <Link to = "/dashboard/ad-form" className="font-lato md:h-10 md:w-40 bg-yellow-button text-center md:py-1.5 rounded-full font-bold">
                                               Post similar ads </Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Other Products as Images */}
                        {/* {otherProducts.length > 0 && (
                            <div className="flex justify-around md:py-10 flex-wrap gap-4">
                                {otherProducts.map((product, index) => (
                                    <img
                                        key={product._id || index}
                                        src={product.images?.[0]?.url || fertilizer}
                                        alt={product.productTitle}
                                        className="md:h-[200px] md:w-[230px] sm:h-40 sm:w-40 cursor-pointer transition-transform hover:scale-110"
                                        onClick={() => setSelectedProduct(index)}
                                    />
                                ))}
                            </div>
                        )} */}
                        {/* Show details of selected product if user clicks an image */}
                        {selectedProduct > 1 && otherProducts[selectedProduct] && (
                            <div className="mt-8">
                                <div className="md:w-[500px] bg-white border border-light-border flex flex-col md:px-10 rounded-2xl mx-auto">
                                    <div className="py-3">
                                        <img src={otherProducts[selectedProduct].images?.[0]?.url || fertilizer} alt="" />
                                    </div>
                                    <div className="md:py-5 md:space-y-3">
                                        <h1 className="font-lato text-2xl">{otherProducts[selectedProduct - 2].productTitle}</h1>
                                        <button className="font-lato md:h-8 md:w-30 rounded-full bg-[#32BB781A] text-sm">{otherProducts[selectedProduct].category}</button>
                                        <p className="font-lato text-lg">{otherProducts[selectedProduct - 2].description}</p>
                                        <div className="flex justify-between items-center">
                                            <h1>GHC <span>{otherProducts[selectedProduct].price}</span></h1>
                                            <button className="font-lato md:h-10 md:w-40 bg-yellow-button rounded-full font-bold">Post similar ads</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>


    )
}