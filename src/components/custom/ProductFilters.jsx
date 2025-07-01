import ProductSearchMain from "./ProductSearchBar";
import LocationFilter from "./LocationFilter";
export default function ProductFilters({onSearch, onFilterChange, products}) {
    
    
    return (
        <div className="flex flex-col gap-6 md:flex-row justify-between mt-18 items-start md:items-center  ">
            {/* <p className="text-lg text-darkest-heading font-medium font-lato">All Products</p> */}
            
                {/* <ProductSearchMain onSearch={onSearch} /> */}
                <LocationFilter onFilterChange={onFilterChange} />
        </div>
    )
}