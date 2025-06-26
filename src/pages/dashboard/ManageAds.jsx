// import {  Flex, Text, Button } from "@radix-ui/themes"
import { DataTableDemo } from "@/components/Productsdata"
import Productimage from "@/components/Productimage"
import { useState } from "react"
import ProductFilters from "@/components/custom/ProductFilters"

export default function ManageAds() {

    const [display, setDisplay] = useState(false)
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
                <h1 className="font-lato md:text-2xl text-darkest-heading">Manage Ads</h1>
                <p className="font-lato md:text-2xl text-sm text-secondary-text">Manage all ads here !</p>
            </div>
            <div className="flex gap-10">
                <div className="w-full">
                    <DataTableDemo setProduct={setProduct} setDisplay={setDisplay} />
                </div>
                <div className="">
                    <Productimage isVisible={display} setisVisible={setDisplay} product={product}/>
                </div>
                
                
            </div>
        </section>
    )
}