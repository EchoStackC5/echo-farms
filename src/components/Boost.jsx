import { useEffect, useRef, useState } from "react";
import personCounting from "../assets/personCounting.png"
import { Link } from "react-router"

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

export default function Boost() {
    const [titleRef, titleVisible] = useViewportAnimation();
    
    return (
        <section id="blogs" className="relative z-10 bg-darkest-heading px-4 text-white">
            <h1 
                ref={titleRef}
                className={`font-inter text-xl md:text-2xl text-darkest-heading mb-10 px-2 md:px-8 transition-all duration-1000 ease-out ${
                    titleVisible 
                        ? 'opacity-100 translate-x-0 translate-y-0' 
                        : 'opacity-0 -translate-x-8 translate-y-2'
                }`}
                style={{
                    filter: titleVisible ? 'blur(0px)' : 'blur(1px)'
                }}
            >
                MAKE MONEY WITH ECHO FARMS
            </h1>
            
            <div className="flex flex-col md:flex-row justify-around mx-auto items-center">
               
                
                <div className="flex flex-col gap-6 mt-6 ">
                    <AnimatedElement delay={400} direction="right">
                        <div>
                            <p className="text-lg font-inter text-white/70 font-bold">Boost your sales</p>
                            <h1 className="text-3xl md:text-4xl font-bold font-inter">Increase your revenues</h1>
                        </div>
                    </AnimatedElement>
                    
                    <AnimatedElement delay={600} direction="right">
                        <p className="text-lg font-inter text-white/70 font-bold">Millions of our users are ordering from businesses<br></br> just like yours. Join Echo Farms,<br></br> expand your reach and increase sales.</p>
                    </AnimatedElement>
                    <div className="mb-8">
                                            <AnimatedElement delay={800} direction="right">
                                            <Link to= "/sign-up" className="bg-yellow-button max-w-full md:max-w-xs w-full text-center text-darkest-heading px-6 py-3 text-lg font-roboto font-medium rounded-full -primary-color transition-all duration-200  hover:bg-primary-color active:bg-primary-color active:text-darkest-heading ">Register as a Vendor</Link>

                    </AnimatedElement>
                    </div>

                </div>
                 <AnimatedElement delay={200} direction="left" className="max-w-lg rounded-2xl overflow-hidden">
                    <img
                        src={personCounting}
                        alt="product image"
                        className="w-full object-cover rounded-t-2xl"
                    />
                </AnimatedElement>
            </div>
        </section>
    )
}