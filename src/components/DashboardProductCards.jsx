import { Flex, Text, Button, } from "@radix-ui/themes"
import { ChartNoAxesColumn } from "lucide-react"
import Linechart from "../assets/Linechart.png"
export default function DashboardProductCards() {
    return (
        <section className="flex justify-between md:mt-10">
            <div className="bg-darkest-heading md:p-4 rounded-lg md:space-y-4 w-[350px]">
                {/* Basic Ads Card */}
                <div className="flex bg-white h-20 w-full justify-between items-center md:px-4 rounded-md shadow">
                    <div className="flex flex-col text-left">
                        <h1 className="text-xl font-bold text-green-900 font-lato">5+</h1>
                        <p className="text-sm text-gray-700 font-lato">Basic Ads</p>
                    </div>
                    <div className="text-green-500">
                        <ChartNoAxesColumn />
                    </div>
                </div>

                {/* Enterprise Ads Card */}
                <div className="flex bg-white md:h-20 md:w-full justify-between items-center md:px-4 rounded-md shadow">
                    <div className="flex flex-col text-left">
                        <h1 className="text-xl font-bold text-green-900 font-lato">10</h1>
                        <p className="text-sm text-gray-700 font-lato">Entreprise Ads</p>
                    </div>
                    <div className="text-green-500">
                        <ChartNoAxesColumn />
                    </div>
                </div>
            </div>

            {/* Impressions Card */}
            <div className="bg-darkest-heading rounded-lg w-[250px] text-white flex flex-col justify-around items-center text-center md:py-5">
                <p className="flex font-lato">4.673 <br /> Impressions</p>
                <div className=" flex">
                    <img src={Linechart} alt="" />
                </div>
            </div>

            <div className="bg-darkest-heading md:p-4 rounded-lg md:space-y-4 md:w-[350px]">
                {/* Active Ads Card */}
                <div className="flex bg-gradient-to-r from-[#386B52] shadow:md to bg-[#3C996C]  md:h-20 md:w-full justify-between items-center px-4 rounded-md shadow">
                    <div className="flex flex-col text-left">
                        <h1 className="md:text-xl font-bold text-gray-300 font-lato">50+</h1>
                        <p className="text-sm text-gray-300 font-lato">Active Ads</p>
                    </div>
                    <div className="text-gray-400">
                        <ChartNoAxesColumn />
                    </div>
                </div>

                {/* Total Ads Card */}
                <div className="flex bg-white md:h-20 md:w-full justify-between items-center md:px-4 rounded-md shadow">
                    <div className="flex flex-col text-left">
                        <h1 className="text-xl font-bold text-green-900 font-lato">45</h1>
                        <p className="text-sm text-gray-700 font-lato">Total Ads</p>
                    </div>
                    <div className="text-green-500">
                        <ChartNoAxesColumn />
                    </div>
                </div>
            </div>

        </section>
    )
}