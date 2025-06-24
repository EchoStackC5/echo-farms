import ProductsNav from "@/components/custom/ProductsNav";
import ProductHero from "@/components/custom/ProductHero";
import ProductFilters from "@/components/custom/ProductFilters";
import ProductpageCard from "@/components/custom/ProductPageCard";
export default function ProductsPage(){
    return(
        <div className="">
            <ProductsNav/>
            <ProductHero/>
            <div className=" px-4 md:px-12">
<ProductFilters/>
            <ProductpageCard/>
            </div>
            
            
        </div>
    )
}