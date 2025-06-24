import { useEffect, useRef, useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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

export default function Faqs() {
    const [titleRef, titleVisible] = useViewportAnimation();
    
    return (
        <div className="relative z-10 bg-darkest-heading pt-16 md:pt-32 px-4 text-white py-8">
            <h1 
                ref={titleRef}
                className={`font-inter text-xl md:text-2xl text-white mb-10 px-2 md:px-8 text-center transition-all duration-1000 ease-out ${
                    titleVisible 
                        ? 'opacity-100 translate-x-0 translate-y-0' 
                        : 'opacity-0 -translate-x-8 translate-y-2'
                }`}
                style={{
                    filter: titleVisible ? 'blur(0px)' : 'blur(1px)'
                }}
            >
                FREQUENTLY ASKED QUESTIONS
            </h1>
            
            <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-4 mb-3 md:mb-16">
                    <AnimatedElement delay={100} direction="left">
                        <AccordionItem value="item-1" className="bg-green-900/60 rounded-2xl border border-white/50 px-6 py-2">
                            <AccordionTrigger className="text-white hover:no-underline text-left font-medium">
                                What is Echo Farms?
                            </AccordionTrigger>
                            <AccordionContent className="text-white/90 pt-2 pb-4">
                                Echo Farms is an online platform that connects farmers, vendors, and buyers by allowing users to post, manage, and discover agricultural products and services.
                            </AccordionContent>
                        </AccordionItem>
                    </AnimatedElement>

                    <AnimatedElement delay={200} direction="right">
                        <AccordionItem value="item-2" className="bg-green-900/60 rounded-2xl border border-white/50 px-6 py-2">
                            <AccordionTrigger className="text-white hover:no-underline text-left font-medium">
                                Who can use Echo Farms?
                            </AccordionTrigger>
                            <AccordionContent className="text-white/90 pt-2 pb-4">
                                Anyone involved in agriculture can use Echo Farms - farmers, vendors, buyers, and agricultural service providers.
                            </AccordionContent>
                        </AccordionItem>
                    </AnimatedElement>

                    <AnimatedElement delay={300} direction="left">
                        <AccordionItem value="item-3" className="bg-green-900/60 rounded-2xl border border-white/50 px-6 py-2">
                            <AccordionTrigger className="text-white hover:no-underline text-left font-medium">
                                How do I post an ad on Echo Farms?
                            </AccordionTrigger>
                            <AccordionContent className="text-white/90 pt-2 pb-4">
                                Simply sign up for a free account, go to your dashboard, and click on "Post Ad." Fill in your product or service details, upload images, select your category, and publish.
                            </AccordionContent>
                        </AccordionItem>
                    </AnimatedElement>

                    <AnimatedElement delay={400} direction="right">
                        <AccordionItem value="item-4" className="bg-green-900/60 rounded-2xl border border-white/50 px-6 py-2">
                            <AccordionTrigger className="text-white hover:no-underline text-left font-medium">
                                Is there a fee to use Echo Farms?
                            </AccordionTrigger>
                            <AccordionContent className="text-white/90 pt-2 pb-4">
                                Basic ads are free. However, we offer premium and enterprise ad options that give your listings better visibility and extra features.
                            </AccordionContent>
                        </AccordionItem>
                    </AnimatedElement>

                    <AnimatedElement delay={500} direction="left">
                        <AccordionItem value="item-5" className="bg-green-900/60 rounded-2xl border border-white/50 px-6 py-2">
                            <AccordionTrigger className="text-white hover:no-underline text-left font-medium">
                                Can I buy products directly from the platform?
                            </AccordionTrigger>
                            <AccordionContent className="text-white/90 pt-2 pb-4">
                                Yes, you can browse and purchase products directly through the platform from verified sellers.
                            </AccordionContent>
                        </AccordionItem>
                    </AnimatedElement>

                    <AnimatedElement delay={600} direction="right">
                        <AccordionItem value="item-6" className="bg-green-900/60 rounded-2xl border border-white/50 px-6 py-2">
                            <AccordionTrigger className="text-white hover:no-underline text-left font-medium">
                                Who can use Echo Farms?
                            </AccordionTrigger>
                            <AccordionContent className="text-white/90 pt-2 pb-4">
                                Anyone involved in agriculture can use Echo Farms - farmers, vendors, buyers, and agricultural service providers.
                            </AccordionContent>
                        </AccordionItem>
                    </AnimatedElement>

                    <AnimatedElement delay={700} direction="left">
                        <AccordionItem value="item-7" className="bg-green-900/60 rounded-2xl border border-white/50 px-6 py-2">
                            <AccordionTrigger className="text-white hover:no-underline text-left font-medium">
                                How can I make money with Echo Farms?
                            </AccordionTrigger>
                            <AccordionContent className="text-white/90 pt-2 pb-4">
                                You can earn by selling your products, offering services, joining our affiliate program, or becoming a verified vendor or partner.
                            </AccordionContent>
                        </AccordionItem>
                    </AnimatedElement>
                </Accordion>
            </div>
        </div>
    )
}