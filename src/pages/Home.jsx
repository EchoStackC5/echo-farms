
import HomeNav from "@/components/HomeNav"
import HeroSection from "@/components/HeroSection"
import AboutUs from "@/components/AboutUs"
import Blogs from "@/components/Blogs"
import Boost from "@/components/Boost"
import Faqs from "@/components/Faqs"
import Footer from "@/components/Footer"

export default function Home() {
    return (
        <div className="bg-darkest-heading w-full h-full">
            <HomeNav />
            <HeroSection />
            <div className="  overflow-y-hidden overflow-x-hidden">
                
            <div className="min-h-screen bg-[url('./assets/argriculturCover.jpg')] bg-center bg-cover relative">
            </div>
            <AboutUs />
            <Blogs/>
            <div className="relative z-10 bg-darkest-heading pt-32">
               <div className="min-h-[80vh] bg-[url('./assets/farm3.jpg')] bg-center bg-cover ">
            </div> 
            </div>
            <Boost/>
            <Faqs/>
            <div className="">
                 <Footer/>
            </div>
            </div>
        </div>
    )
}