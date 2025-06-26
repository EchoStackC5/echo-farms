import ProductDetailsCard from "@/components/ProductDetailsCard"
import ProductCard from "@/components/ProductCard"
import { apiFetcher } from "@/api/client";
import useSWR from "swr";
import { BeatLoader } from "react-spinners";


export default function ProductDetails(){
    
    const {data, isLoading, error} = useSWR("/adverts",apiFetcher);
    if (isLoading) {
        return (
            <div><BeatLoader size={100}/></div>
        )
    }

    if (error) {
        return (
            <div>
                <p>Something went wrong</p>
            </div>
        )
    }

    return(
        <section>
            
            <ProductDetailsCard/>
            <p>Related Products</p>
            <ProductCard/>
        </section>
    )
}