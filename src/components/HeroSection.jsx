import { Link } from "react-router";
import HeroSearchFilter from "./HeroSearchFilter";

export default function HeroSection(){
    return(
        <section id="home" className=" space-y-8 px-4 sticky top-0 z-0 bg-darkest-heading   ">
            <div  className="text-white mx-auto  flex justify-center items-center flex-col gap-6 md:gap-2 mt-18  ">
                    <h1 className="font-inter text-3xl md:text-6xl text-white/80 font-bold text-center max-w-4xl leading-8 md:leading-16">Best Agricultural Equipment and Farm Needs</h1>
                    <p className="font-roboto font-medium text-white/60 text-[16px] text-center max-w-2xl text-sm md:text-lg ">Discover, advertise, and connect  trusted farm equipment, solar energy products, and services  all in one place, tailored to your location and needs.</p>               
            </div>
            <div className="flex  flex-col justify-center items-center md:flex-row gap-3 mt-16 ">
                <Link to= "/sign-up" className="bg-yellow-button max-w-full md:max-w-[200px] w-full text-center text-darkest-heading px-6 py-3 text-lg font-roboto font-medium rounded-full hover:bg-primary-color transition-all duration-200  active:bg-primary-color active:text-darkest-heading ">Earn with Echo</Link>
                <Link to= "/products" className="bg-transparent max-w-full md:max-w-[200px] border text-center w-full border-light-border  text-white hover:text-darkest-heading px-6 py-3 text-lg font-roboto font-medium rounded-full hover:bg-primary-color transition-all duration-200 active:bg-primary-color active:text-darkest-heading hover:border-none active:border-none">Browse Products</Link>
            </div>
            <HeroSearchFilter/>
            
            
        </section>
    )
}