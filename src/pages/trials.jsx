// import droneImage from "@/assets/producttDrone.svg"
import droneImage from "@/assets/producttDrone.svg"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from "react";
const slides = [
    {
        imageUrl: droneImage,
    },
    {
        imageUrl: "https://i.pinimg.com/736x/72/12/1a/72121a39ac8427703a81277ccac370b7.jpg"
    },
    {
        imageUrl: "https://i.pinimg.com/736x/65/c0/ea/65c0eae07f7b52021a41e0de9bc0831f.jpg"
    }

]
export default function Trials() {
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
        <div className="flex justify-center w-full mt-18 px-12   ">
            <div
                className="h-[50vh] bg-cover bg-center w-full rounded-lg"
                style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 flex flex-col px-8 pt-12 gap-6">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-4 top-6">
                            <p className="text-2xl font-lato font-medium text-white">Smart Agricultural Spraying <br>
                            </br>Drone -16L Tank Capacity</p>
                            <p className="font-roboto text-sm text-white/80 font-normal">
                                Precision drone for crop spraying and watering. Covers large fields<br></br> quickly, reduces chemical waste, and improves efficiency<br></br> with GPS control and real-time flight feedback.
                            </p>
                        </div>
                        <p className="border border-white text-sm rounded-full text-white cursor-pointer w-[100px] h-[30px] flex justify-center items-center text-center py-2">🔥 Top Ad</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <button className="text-darkest-heading font-medium rounded-full bg-yellow-button text-lg font-poppins py-2 px-8 active:text-darkest-heading hover:border-none active:border-none hover:bg-primary-color transition-all duration-200 active:bg-primary-color">Buy Now</button>
                        <div className="slide indicators flex gap-2 ">
                            <button className="w-4 h-4 bg-amber-50 rounded-full  transition-all duration-300"></button>
                            <button className="w-4 h-4 bg-amber-50 rounded-full  transition-all duration-300"></button>
                            <button className="w-4 h-4 bg-amber-50 rounded-full  transition-all duration-300"></button>

                        </div>
                        <div className="flex gap-2">
                            <button onClick={handlePrev} className="bg-backgrounds/80 w-12 h-12 justify-center flex items-center hover:bg-white/70 text-darkest-heading  rounded-full cursor-pointer"><ChevronLeft className="w-8 h-8" /></button>

                            <button onClick={handleNext} className="bg-backgrounds/80 w-12 h-12 justify-center flex items-center hover:bg-white/70 text-darkest-heading  rounded-full cursor-pointer"><ChevronRight className="w-8 h-8" /></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}