// import {  Flex, Text, Button } from "@radix-ui/themes"
import ProductNavBar from "@/components/ProductNavbar"
import ProductCard from "@/components/ProductCard"
export default function Products(){
    return(
        <div>
            <ProductNavBar/>
            <p className=" text-shadow-indigo-300 font-extrabold text-9xl">This is Login</p>
            <ProductCard/>
        </div>
    )
}