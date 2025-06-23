import productLogo from "@/assets/productLogo.svg";
import { Bell, ShoppingCart } from "lucide-react";

export default function ProductsNav() {
    return (
        <nav className="bg-darkest-heading text-white  mx-auto sticky top-0 left-0 right-0 z-50 isolate transition-all duration-300 ease-in-out">
            <div className="flex px-4 py-5 justify-between">
                <img src={productLogo} />
                <div className="flex gap-4">

                    <Bell className="w-12 h-12 px-2 py-2 bg-backgrounds text-primary-color rounded-full" />
                    <ShoppingCart className="w-12 h-12 px-2 py-2 bg-backgrounds text-primary-color rounded-full" />

                </div>
            </div>

        </nav>
    )
}