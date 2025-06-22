import landingPagelogo from "../assets/landingPageLogo.svg"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react";
import { Link } from "react-router"
import "../styles/styles.css";

export default function HomeNav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        const handScroll = () => {
            const scrollPosition = window.scrollY
            setIsScrolled(scrollPosition > 50)
        }

        window.addEventListener('scroll', handScroll)
        return () => {
            window.removeEventListener('scroll', handScroll)
        }
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`
            sticky top-0 left-0 right-0 z-50 isolate transition-all duration-300 ease-in-out 
            ${isScrolled
                ? 'bg-white/15 backdrop-blur-xl shadow-2xl border-b border-white/20'
                : 'bg-transparent backdrop-blur-none shadow-none border-none'
            }
        `}>
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-between items-center text-white px-6 sm:px-8 py-4">
                <img src={landingPagelogo} alt="Echo Logo" className="cursor-pointer"></img>
                <div className="cursor-pointer font-roboto font-light text-[16px] flex gap-4">
                    <a href="#home" className="hover:text-primary-color hover:font-bold transition-all duration-200"> Home</a>
                    <a href="#about-us"  className="hover:text-primary-color hover:font-bold transition-all duration-200 active:text-primary-color active:font-bold"> About Us</a>
                    <Link to="/products" className="hover:text-primary-color hover:font-bold transition-all duration-200"> Shop</Link>
                    <a href="#blogs" className="hover:text-primary-color hover:font-bold transition-all duration-200"> Blogs</a>
                </div>
                <Link to="/sign-up" className="bg-yellow-button px-6 py-2 rounded-full font-medium text-darkest-heading hover:bg-primary-color transition-all duration-200">Register</Link>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden flex justify-between items-center text-white px-4 py-4  pb-4 space-y-4 bg-white/10 backdrop-blur-md border-t border-white/20">
                <img src={landingPagelogo} alt="Echo Logo" className="cursor-pointer"></img>
                <button
                    className="p-2 text-white hover:text-primary-color transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out  ${
                isMenuOpen
                    ? 'max-h-64 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
                <div className="px-6 pb-4 space-y-4 bg-white/10 backdrop-blur-md border-t border-white/20">
                    <div className="flex flex-col space-y-2 text-white">
                        <a href="#home"
    
                            className="hover:text-primary-color transition-all duration-200 py-2"
                           
                        > 
                            Home
                        </a>
                        < a href="#about-us"
                            className="hover:text-primary-color transition-all duration-200 py-2"
                         
                        > 
                            About Us
                        </a>
                        <Link to="/products" 
                            
                            className="hover:text-primary-color transition-all duration-200 py-2"
                            
                        > 
                            Shop
                        </Link>
                        <a href="#blogs"
                            to="/blogs" 
                            className="hover:text-primary-color transition-all duration-200 py-2"
                           
                        > 
                            Blogs
                        </a>
                        <Link 
                            to="/sign-up" 
                            className="bg-yellow-button px-6 py-2 rounded-full font-medium text-darkest-heading hover:bg-primary-color transition-all duration-200 text-center mt-2"
                          
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}