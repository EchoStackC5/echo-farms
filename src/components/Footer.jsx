import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Mail, Facebook, Linkedin, Twitter } from "lucide-react";
import landingPagelogo from "../assets/landingPageLogo.svg"

// Custom hook for viewport animations
const useViewportAnimation = (options = {}) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1, // Trigger when 10% of element is visible
                rootMargin: '50px', // Start animation 50px before element enters viewport
                ...options
            }
        );
        
        if (ref.current) {
            observer.observe(ref.current);
        }
        
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    
    return [ref, isVisible];
};

// Animated wrapper component
const AnimatedElement = ({ children, delay = 0, className = "", direction = "left" }) => {
    const [ref, isVisible] = useViewportAnimation();
    
    const getTransform = () => {
        if (direction === "left") {
            return isVisible 
                ? 'translateX(0) translateY(0) scale(1)' 
                : 'translateX(-60px) translateY(20px) scale(0.9)';
        } else if (direction === "right") {
            return isVisible 
                ? 'translateX(0) translateY(0) scale(1)' 
                : 'translateX(60px) translateY(20px) scale(0.9)';
        } else if (direction === "up") {
            return isVisible 
                ? 'translateY(0) scale(1)' 
                : 'translateY(40px) scale(0.95)';
        }
        return isVisible 
            ? 'translateY(0) scale(1)' 
            : 'translateY(30px) scale(0.95)';
    };
    
    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                transitionDelay: `${delay}ms`,
                filter: isVisible ? 'blur(0px)' : 'blur(2px)'
            }}
        >
            {children}
        </div>
    );
};

export default function Footer() {
    return (
        <section className="relative z-10 bg-green-950 pt-16 px-4 text-white">
            <div className="">
                {/* Newsletter Section */}
                <AnimatedElement delay={100} direction="up" className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-medium mb-8 max-w-2xl mx-auto">
                        Join our newsletter to get the latest guides on career!
                    </h2>
                    
                    {/* Email Subscription Form */}
                    <div className="max-w-md mx-auto relative">
                        <div className="flex items-center bg-transparent border-2 border-white/30 rounded-full px-4 py-3 hover:border-white/50 transition-all duration-300">
                            <Mail className="w-5 h-5 text-white/70 mr-3" />
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="flex-1 bg-transparent text-white placeholder-white/70 outline-none"
                            />
                            <button className="bg-primary-color text-darkest-heading px-6 py-2 rounded-full font-medium hover:bg-primary-color hover:scale-105 transition-all duration-300 active:scale-95">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </AnimatedElement>

                {/* Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    {/* Navigation */}
                    <AnimatedElement delay={200} direction="left">
                        <div>
                            <h3 className="font-semibold mb-4 text-white/90">NAVIGATION</h3>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-white/70 hover:text-white transition-colors duration-300">Home</Link></li>
                                <li><Link to="/" className="text-white/70 hover:text-white transition-colors duration-300">About Us</Link></li>
                                <li><Link to="/" className="text-white/70 hover:text-white transition-colors duration-300">Shop</Link></li>
                                <li><Link to="/" className="text-white/70 hover:text-white transition-colors duration-300">Blogs</Link></li>
                            </ul>
                        </div>
                    </AnimatedElement>

                    {/* Help */}
                    <AnimatedElement delay={300} direction="up">
                        <div>
                            <h3 className="font-semibold mb-4 text-white/90">HELP</h3>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-white/70 hover:text-white transition-colors duration-300">Customer Support</Link></li>
                                <li><Link to="/" className="text-white/70 hover:text-white transition-colors duration-300">Sharing Information</Link></li>
                                <li><Link to="/" className="text-white/70 hover:text-white transition-colors duration-300">Building Leadership</Link></li>
                                <li><Link to="/" className="text-white/70 hover:text-white transition-colors duration-300">Engaging With Global Fund</Link></li>
                                <li><Link to="/" className="text-white/70 hover:text-white transition-colors duration-300">Supporting Africa Farming</Link></li>
                            </ul>
                        </div>
                    </AnimatedElement>

                    {/* Legal */}
                    <AnimatedElement delay={400} direction="up">
                        <div>
                            <h3 className="font-semibold mb-4 text-white/90">LEGAL</h3>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-white/70 hover:text-white transition-colors duration-300">General Info</Link></li>
                                <li><Link to="/" className="text-white/70 hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
                                <li><Link to="/" className="text-white/70 hover:text-white transition-colors duration-300">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </AnimatedElement>

                    {/* Talk to Us */}
                    <AnimatedElement delay={500} direction="right">
                        <div>
                            <h3 className="font-semibold mb-4 text-white/90">TALK TO US</h3>
                            <ul className="space-y-2">
                                <li><a href="mailto:support@getiara.com" className="text-white/70 hover:text-white transition-colors duration-300">support@getiara.com</a></li>
                                <li><a href="tel:+66 2399 1145" className="text-white/70 hover:text-white transition-colors duration-300">+66 2399 1145</a></li>
                                <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors duration-300">Contact Us</Link></li>
                                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Facebook</a></li>
                                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">LinkedIn</a></li>
                                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">X</a></li>
                            </ul>
                        </div>
                    </AnimatedElement>
                </div>

                {/* Bottom Section */}
                <AnimatedElement delay={600} direction="up" className="border-t border-white/20 pt-8 pb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-3">
                        {/* Logo and Copyright */}
                        <div className="flex items-center mb-4 md:mb-0">
                            <img src={landingPagelogo} alt="EchoFarms" className="h-12 mr-4 hover:scale-105 transition-transform duration-300" />
                        </div>
                       
                        <span className="text-white/70 text-sm">
                            © 2025 EchoFarms Designed by <Link to="https://gloriadedo.netlify.app/" className="font-bold text-pink-300 hover:text-pink-200 transition-colors duration-300">Gloria Dedo</Link>
                        </span>

                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300">
                                <Facebook className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300">
                                <Linkedin className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300">
                                <Twitter className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>
                </AnimatedElement>
            </div>
        </section>
    )
}