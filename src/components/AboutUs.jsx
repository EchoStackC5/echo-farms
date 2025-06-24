import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import drakulaImage from "../assets/img1.png";
import SolarImg from "../assets/solar.png";
import trackImg from "../assets/img2.png";

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
const AnimatedCard = ({ children, delay = 0, className = "" }) => {
    const [ref, isVisible] = useViewportAnimation();
    
    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                    ? 'translateX(0) translateY(0) scale(1)' 
                    : 'translateX(-60px) translateY(20px) scale(0.9)',
                transitionDelay: `${delay}ms`,
                filter: isVisible ? 'blur(0px)' : 'blur(2px)'
            }}
        >
            {children}
        </div>
    );
};

export default function AboutUs() {
    const [titleRef, titleVisible] = useViewportAnimation();
    
    return (
        <section id="about-us" className="relative z-10 bg-darkest-heading pt-32 px-4 text-white">
            <h1 
                ref={titleRef}
                className={`font-inter text-xl md:text-2xl text-white mb-10 px-2 md:px-8 transition-all duration-1000 ease-out ${
                    titleVisible 
                        ? 'opacity-100 translate-x-0 translate-y-0' 
                        : 'opacity-0 -translate-x-8 translate-y-2'
                }`}
                style={{
                    filter: titleVisible ? 'blur(0px)' : 'blur(1px)'
                }}
            >
                ALL YOUR NEEDS IN ONE PLACE
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <AnimatedCard delay={150} className="max-w-xs rounded-2xl overflow-hidden mx-auto">
                    <img
                        src={drakulaImage}
                        alt="product image"
                        className="w-full object-cover rounded-t-2xl"
                    />
                    <div className="p-4 space-y-2">
                        <Link
                            to="/products"
                            className="text-white text-sm md:text-lg font-semibold block font-inter underline hover:text-white/80 transition-colors duration-300"
                        >
                            Crop Protection & Fertilizers
                        </Link>
                        <p className="text-white/80 text-xs md:text-sm leading-relaxed font-roboto">
                            Explore a wide range of pesticides, herbicides, organic
                            treatments, and soil enhancers.
                        </p>
                    </div>
                </AnimatedCard>
                
                <AnimatedCard delay={300} className="max-w-xs rounded-2xl overflow-hidden mx-auto">
                    <img
                        src={trackImg}
                        alt="product image"
                        className="w-full object-cover rounded-t-2xl"
                    />
                    <div className="p-4 space-y-2">
                        <Link
                            to="/products"
                            className="text-white font-semibold block font-inter text-sm md:text-lg underline hover:text-white/80 transition-colors duration-300"
                        >
                            Farm Machinery & Equipment
                        </Link>
                        <p className="text-white/80 text-xs md:text-sm leading-relaxed font-roboto">
                            Find a wide range of reliable tools and heavy-duty machines to boost your farm's productivity.
                        </p>
                    </div>
                </AnimatedCard>
                
                <AnimatedCard delay={450} className="max-w-xs rounded-2xl overflow-hidden mx-auto">
                    <img
                        src={SolarImg}
                        alt="product image"
                        className="w-full object-cover rounded-t-2xl"
                    />
                    <div className="p-4 space-y-2">
                        <Link
                            to="/products"
                            className="text-white text-sm md:text-lg font-semibold block font-inter underline hover:text-white/80 transition-colors duration-300"
                        >
                            Solar Energy Solutions for Smart Farming
                        </Link>
                        <p className="text-white/80 text-xs md:text-sm leading-relaxed font-roboto">
                            Discover affordable and eco-friendly options that reduce energy costs and increase efficiency.
                        </p>
                    </div>
                </AnimatedCard>
            </div>
        </section>
    );
}