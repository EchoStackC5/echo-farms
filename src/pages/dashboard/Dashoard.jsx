// import {  Flex, Text, Button } from "@radix-ui/themes"
import DashboardCards from "@/components/DashboardCards"
import DashboardProductCards from "@/components/DashboardProductCards"
import fertilizer from "../../assets/fertilizer.png"
import pesticides from "../../assets/pesticides.png"
import seeds from "../../assets/seeds.png"
import tractor1 from "../../assets/tractor1.png"

export default function Home() {
    return (
        <section className="flex flex-col">
            <DashboardCards />
            <DashboardProductCards />
            <p className="font-lato md:text-2xl py-15">🔥Hot in the market place</p>
            <div className="flex md:gap-7">
                <div className="md:h[706px] md:w-[500px] bg-white border border-light-border flex flex-col md:px-10 rounded-2xl">
                    <div></div>
                    <div className="md:py-5 md:space-y-3">
                        <h1>Massey Fergoson 385 4WD 2022 Model</h1>
                        <button className="font-lato md:h-8 md:w-30 rounded-full bg-[#32BB781A] text-sm">Farm Machinery</button>
                        <p>Durable and fuel efficient tractor ideal for large-scale farming. Comes with power steering, diesel engine and low-hour usage</p>
                        <div className="flex justify-between items-center">
                            <h1>GHC 70,000</h1>
                            <button className="font-lato md:h-10 md:w-40 bg-yellow-button rounded-full">Post similar ads</button>
                        </div>
                    </div>
                </div>

                <div className="md:w-[500px] bg-white border-light-border flex flex-col md:px-10">
                    <div></div>
                    <div className="md:py-5 md:space-y-3 rounded">
                        <h1>300W Solar Panel Kit for Irrigations & Lighting</h1>
                        <button className="font-lato md:h-8 md:w-30 rounded-full bg-[#32BB781A] text-sm">Solar Energy</button>
                        <p>High-efficiency solar panel kit suitable for farm lighting, irrigation systems, and off-grid power needs </p>
                        <div className="flex justify-between items-center">
                            <h1>GHC 3,000</h1>
                            <button className="font-lato md:h-10 md:w-40 bg-yellow-button rounded-full">Post similar ads</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-around md:py-10 flex-wrap gap-4">
            <img src={pesticides} alt="" className="md:h-[200px] md:w-[230px] sm:h-40 sm:w-40 cursor-pointer transition-transform hover:scale-110 "/>
            <img src={seeds} alt=""  className="md:h-[200px] md:w-[230px] sm:h-40 sm:w-40 cursor-pointer transition-transform hover:scale-110"/>
            <img src={tractor1} alt=""  className="md:h-[200px] md:w-[230px] sm:h-40 sm:w-40 cursor-pointer transition-transform hover:scale-110"/>
            <img src={fertilizer} alt=""  className="md:h-[200px] md:w-[230px] sm:h-40 sm:w-40 cursor-pointer transition-transform hover:scale-110"/>
            </div>
        </section>


    )
}