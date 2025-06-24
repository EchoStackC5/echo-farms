import productLogo from "@/assets/productLogo.svg";
import { Bell, ShoppingCart, Menu, X } from "lucide-react";
import UserProfile from "./UserProfile";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function ProductsNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Auto-close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-darkest-heading text-white sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                <img src={productLogo} alt="Logo" className=" cursor-pointer" />
                <div className="flex items-center gap-4">
                    <Bell className="w-12 h-12 p-2 hover:bg-backgrounds hover:text-primary-color rounded-full cursor-pointer bg-yellow-button text-darkest-heading transition" />
                    <ShoppingCart className="w-12 h-12 p-2 hover:bg-backgrounds hover:text-primary-color rounded-full cursor-pointer bg-yellow-button text-darkest-heading transition" />
                    <UserProfile />
                </div>
            </div>

            {/* Mobile Header */}
            <div className="flex md:hidden items-center justify-between px-4 py-3 bg-darkest-heading border-b border-white/10">
                <img src={productLogo} alt="Logo" className=" cursor-pointer" />
                <button
                    className="p-2 text-white hover:text-primary-color transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex flex-col px-6 py-4 space-y-3 bg-darkest-heading border-t border-white/10 text-white">
                    <div className="flex flex-col  gap-4">
                    <Bell className="w-12 h-12 p-2 hover:bg-backgrounds hover:text-primary-color rounded-full cursor-pointer bg-yellow-button text-darkest-heading transition" />
                    <ShoppingCart className="w-12 h-12 p-2 hover:bg-backgrounds hover:text-primary-color rounded-full cursor-pointer bg-yellow-button text-darkest-heading transition" />
                    <UserProfile />
                </div>
                </div>
            </div>
        </nav>
    );
}
