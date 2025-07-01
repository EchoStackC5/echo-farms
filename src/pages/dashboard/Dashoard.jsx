// import {  Flex, Text, Button } from "@radix-ui/themes"
import DashboardCards from "@/components/DashboardCards"
import DashboardProductCards from "@/components/DashboardProductCards"
import dogFood from "@/assets/dogFood.jpg"
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

    // Fetch only enterprise products
    const enterpriseProducts = (data || []).filter(product => product.plan === "Enterprise");
    
    // Get the currently selected product to display
    const currentProduct = enterpriseProducts[selectedProduct];
        const mainProducts = enterpriseProducts.slice(0, 2);

    return (
        <section className="flex flex-col overflow-hidden">
            <DashboardCards />
            <DashboardProductCards />
            <p className="font-lato md:text-3xl font-bold py-15">🔥Hot in the market place</p>
            
            {enterpriseProducts.length > 0 && (
                <div>
                    {/* Display only the selected product */}
                    <div></div>
                    
                    {currentProduct && (
                        <section className="flex justify-around ">
                            <div className="flex  mb-8">
                            <div className="md:w-[400px] bg-white border border-light-border flex flex-col md:px-10 rounded-2xl">
                                <div className="py-3">
                                    <img
                                        src={currentProduct.images?.[0]?.url || cartapillar}
                                        alt={currentProduct.productTitle}
                                        className="h-85  rounded-2xl object-cover w-full" />
                                </div>
                                <div className="md:py-5 md:space-y-3">
                                    <h1 className="font-lato text-xl text-darkest-heading font-medium">
                                        {currentProduct.productTitle}
                                    </h1>
                                    <button className="font-lato px-4 py-2 border border-light-border text-secondary-text font-medium rounded-full bg-[#32BB781A] text-sm">
                                        {currentProduct.category?.[0]}
                                    </button>
                                    <p className="font-lato text-lg text-secondary-text font-normal">{currentProduct.description}</p>
                                    <div className="flex justify-between items-center text-darkest-heading text-lg font-medium">
                                        <h1>GHC <span>{currentProduct.price}.00</span></h1>
                                        <Link
                                            to="/dashboard/ad-form"
                                            className="font-lato text-sm px-5 py-3 bg-green-buuton text-white  text-center rounded-full font-medium"
                                        >
                                            Post similar ads
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex  mb-8">
                                <div className="w-[400px] h-[650px] bg-white border border-light-border flex flex-col md:px-10 rounded-2xl">
                                    <div className="py-3">
                                        <img
                                            src={dogFood}
                                            
                                            className="h-85  rounded-2xl object-cover w-full" />
                                    </div>
                                    <div className="space-y-3">
                                        <h1 className="font-lato text-xl text-darkest-heading font-medium">
                                             Premium Nourish Dog Food 
                                        </h1>
                                        <button className="font-lato border border-light-border px-4 py-2 text-secondary-text font-medium rounded-full bg-[#32BB781A] text-sm">
                                            Animal Products
                                        </button>
                                        <p className="font-lato text-lg text-secondary-text font-normal">A complete and balanced meal formulated to support your dog’s overall health, vitality, and energy levels.</p>
                                        <div className="flex justify-between items-center text-darkest-heading font-medium text-xl">
                                            <h1>GHC <span>200.00</span></h1>
                                            <Link
                                                to="/dashboard/ad-form"
                                                className="font-lato text-sm px-5 py-3 bg-green-buuton text-white text-center rounded-full font-medium"
                                            >
                                                Post similar ads
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div></section>
                    )}

                    {/* Product thumbnails for selection */}
                    {enterpriseProducts.length > 1 && (
                        <div className="flex justify-center  flex-wrap gap-4">
                            {enterpriseProducts.map((product, index) => (
                                <div key={product._id || index} className="relative">
                                    <img
                                        src={product.images?.[0]?.url || fertilizer}
                                        alt={product.productTitle}
                                        className={`md:h-[150px] md:w-[180px] sm:h-32 sm:w-32 cursor-pointer transition-all duration-200 rounded-lg object-cover ${
                                            selectedProduct === index 
                                                ? "ring-4 ring-green-500 scale-105" 
                                                : "hover:scale-105 opacity-80 hover:opacity-100"
                                        }`}
                                        onClick={() => setSelectedProduct(index)}
                                    />
                                    {selectedProduct === index && (
                                        <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                            ✓
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {enterpriseProducts.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-gray-500">No enterprise products available at the moment.</p>
                </div>
            )}
        </section>
    )
}