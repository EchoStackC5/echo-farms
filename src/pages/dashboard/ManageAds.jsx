// import {  Flex, Text, Button } from "@radix-ui/themes"
import { DataTableDemo } from "@/components/Productsdata"
import Productimage from "@/components/Productimage"
import { useState } from "react"
import ProductFilters from "@/components/custom/ProductFilters"


export default function ManageAds() {
    const [product, setProduct] = useState(null);

    return (
        <section>
            <div className="md:py-8">
                <h1 className="font-lato md:text-2xl text-darkest-heading">Manage Ads</h1>
                <p className="font-lato md:text-2xl text-sm text-secondary-text">Manage all ads here !</p>
            </div>
            <div className="flex gap-10">
                <div className="w-full">
                    <DataTableDemo setProduct={setProduct} />
                </div>
                {product && <div className="">
                    <Productimage isVisible={!!product} product={product} onClose={() => setProduct(null)}  />
                </div>}


            </div>
        </section>
    )
}