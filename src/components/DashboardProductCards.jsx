import { Flex, Text, Button, } from "@radix-ui/themes"
import { ChartNoAxesColumn } from "lucide-react"
import Linechart from "../assets/Linechart.png"
export default function DashboardProductCards() {
    return (
        <section className="flex justify-between">
            <div className="bg-green-900 p-4 rounded-lg space-y-4 w-[350px]">
                {/* Basic Ads Card */}
                <div className="flex bg-white h-20 w-full justify-between items-center px-4 rounded-md shadow">
                    <div className="flex flex-col text-left">
                        <h1 className="text-xl font-bold text-green-900">5+</h1>
                        <p className="text-sm text-gray-700">Basic Ads</p>
                    </div>
                    <div className="text-green-500">
                        <ChartNoAxesColumn />
                    </div>
                </div>

                {/* Enterprise Ads Card */}
                <div className="flex bg-white h-20 w-full justify-between items-center px-4 rounded-md shadow">
                    <div className="flex flex-col text-left">
                        <h1 className="text-xl font-bold text-green-900">10</h1>
                        <p className="text-sm text-gray-700">Entreprise Ads</p>
                    </div>
                    <div className="text-green-500">
                        <ChartNoAxesColumn />
                    </div>
                </div>
            </div>

            {/* Impressions Card */}
            <div className="bg-green-900 rounded-lg w-[250px] text-white flex flex-col justify-around items-center text-center py-5">
                <p className="flex">4.673 <br /> Impressions</p>
                <div className=" flex">
                    <img src={Linechart} alt="" />
                </div>
            </div>

            <div className="bg-green-900 p-4 rounded-lg space-y-4 w-[350px]">
                {/* Active Ads Card */}
                <div className="flex bg-gradient-to-r from-green-800 shadow:md to bg-green-700  h-20 w-full justify-between items-center px-4 rounded-md shadow">
                    <div className="flex flex-col text-left">
                        <h1 className="text-xl font-bold text-gray-300">50+</h1>
                        <p className="text-sm text-gray-300">Active Ads</p>
                    </div>
                    <div className="text-gray-400">
                        <ChartNoAxesColumn />
                    </div>
                </div>

                {/* Total Ads Card */}
                <div className="flex bg-white h-20 w-full justify-between items-center px-4 rounded-md shadow">
                    <div className="flex flex-col text-left">
                        <h1 className="text-xl font-bold text-green-900">45</h1>
                        <p className="text-sm text-gray-700">Total Ads</p>
                    </div>
                    <div className="text-green-500">
                        <ChartNoAxesColumn />
                    </div>
                </div>
            </div>

        </section>
    )
}