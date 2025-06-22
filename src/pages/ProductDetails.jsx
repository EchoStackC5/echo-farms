import ProductDetailsCard from "@/components/ProductDetailsCard"
import ProductCard from "@/components/ProductCard"
export default function ProductDetails(){
    return(
        <section>
            <p>This is product details</p>
            <ProductDetailsCard/>
            <p>Related Products</p>
            <ProductCard/>
        </section>
    )
}