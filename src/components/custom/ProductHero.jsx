import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from "react";
import droneImage from "@/assets/producttDrone.svg";
import drone2 from "@/assets/droneP.jpg";
import drone3 from "@/assets/drone1.jpg"


// Using placeholder images since we can't access your local assets
const slides = [
    {
        imageUrl: droneImage,
    },
    {
        imageUrl: drone2 ,
    },
    {
        imageUrl: drone3
    }
];

export default function ProductHero() {
    const [currentSlide, setCurrentSlide] = useState(0);
     
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    // Interactive indicator function
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return ( 
        <div className="flex justify-center w-full mt-18 px-4 sm:px-8 lg:px-12">
            <div className="relative w-full overflow-hidden rounded-lg">
                {/* Sliding container with smooth animation */}
                <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 h-[40vh] sm:h-[50vh] lg:h-[60vh] bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${slide.imageUrl})` }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40"></div>
                            
                            {/* Content */}
                            <div className="relative z-10 flex flex-col px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-12 gap-4 sm:gap-6 h-full">
                                <div className="flex flex-col lg:flex-row justify-between gap-4">
                                    <div className="flex flex-col gap-3 sm:gap-4">
                                        <p className="text-lg sm:text-xl lg:text-2xl font-lato font-medium text-white leading-tight">
                                            Smart Agricultural Spraying <br className="hidden sm:block" />
                                            Drone -16L Tank Capacity
                                        </p>
                                        <p className="font-roboto text-xs sm:text-sm text-white/80 font-normal leading-relaxed max-w-md">
                                            Precision drone for crop spraying and watering. Covers large fields<br className="hidden sm:block" /> 
                                            quickly, reduces chemical waste, and improves efficiency<br className="hidden sm:block" /> 
                                            with GPS control and real-time flight feedback.
                                        </p>
                                    </div>
                                    <div className="flex lg:block justify-start">
                                        <p className="border border-white text-xs sm:text-sm rounded-full text-white cursor-pointer w-[80px] sm:w-[100px] h-[25px] sm:h-[30px] flex justify-center items-center text-center">
                                            🔥 Top Ad
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Bottom controls */}
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto pb-4">
                                    <button className="text-darkest-heading font-medium rounded-full bg-yellow-button text-sm sm:text-lg font-poppins py-2 px-6 sm:px-8 hover:bg-primary-color transition-all duration-200 order-1 sm:order-none">
                                        Buy Now
                                    </button>
                                    
                                    {/* Interactive indicators */}
                                    <div className="flex gap-2 order-3 sm:order-none">
                                        {slides.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToSlide(index)}
                                                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                                                    currentSlide === index 
                                                        ? 'bg-white scale-110' 
                                                        : 'bg-white/50 hover:bg-white/70'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    
                                    {/* Navigation buttons */}
                                    <div className="flex gap-2 order-2 sm:order-none">
                                        <button 
                                            onClick={handlePrev} 
                                            className="bg-white/20 backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 justify-center flex items-center hover:bg-white/30 text-white rounded-full cursor-pointer transition-all duration-200"
                                        >
                                            <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" />
                                        </button>
                                        
                                        <button 
                                            onClick={handleNext} 
                                            className="bg-white/20 backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 justify-center flex items-center hover:bg-white/30 text-white rounded-full cursor-pointer transition-all duration-200"
                                        >
                                            <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}