// import {  Flex, Text, Button } from "@radix-ui/themes"
import  {DataTableDemo}  from "@/components/Productsdata"
import product4 from "../../assets/product4.svg"
import { useState } from "react"

export default function ManageAds() {

    const [product, setProduct] = useState({
    id: "m5gr84i9",
    adTitle: "Tractor",
    category: "Farm Machinery",
    price: "GHC 60,000",
    adStatus: "Published",
    adType: "Basic"
  })
    return (
        <section>
            <div className="md:py-8">
                <h1 className="font-lato md:text-4xl">Manage Ads</h1>
                <p className="font-lato md:text-2xl">Manage all ads here !</p>
            </div>
            <div className="flex gap-8">
                <div className="bg-white border border-light-border rounded-2xl md:w-[750px]">
                    <DataTableDemo setProduct={setProduct} />
                </div>
                <div className="md:py-5 md:space-y-3 md:w-[300px] bg-white border border-light-border flex flex-col md:px-10 rounded-sm h-150">
                        <img src={product4} alt="" className="h-100 w-90"/>
                    <div>
                        <h1 className="font-lato text-lg">All Purpose Fertilizer. Heavy-Duty Crop Feeding</h1>
                        <button className="font-lato md:h-8 md:w-30 rounded-full bg-[#32BB781A] text-xs">Farm Machinery</button>
                        <p className="font-lato text-sm text-secondary-text">Powerful and durable bulldozer ideal for clearing lands</p>
                        <div className="flex flex-col justify-between">
                            <h1 className="font-bold">GHC 50,000.00</h1>
                            <p className="font-lato text-secondary-text">Greater Accra, East Legon</p>
                            <button className="font-lato md:h-8 md:w-45 bg-white border border-green-buuton rounded-full font-bold mb-3 hover:bg-yellow-button cursor-pointer">Edit Ad</button>
                            <button className="font-lato md:h-8 md:w-45 bg-white border border-green-buuton rounded-full font-bold hover:bg-yellow-button cursor-pointer">Delete Ad</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}