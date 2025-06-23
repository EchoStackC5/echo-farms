
import HomeNav from "@/components/HomeNav"
import HeroSection from "@/components/HeroSection"
import AboutUs from "@/components/AboutUs"
export default function Home() {
    return (
        <div className="bg-darkest-heading w-full h-full">
            <HomeNav />
            <HeroSection />
            <div className="min-h-screen bg-[url('./assets/argriculturCover.jpg')] bg-center bg-cover relative">
            </div>
            <AboutUs />

        </div>
    )
}