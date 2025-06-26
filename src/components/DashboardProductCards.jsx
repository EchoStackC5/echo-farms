import { Flex, Text, Button, } from "@radix-ui/themes"
import { ChartNoAxesColumn } from "lucide-react"
import Linechart from "../assets/Linechart.png"



export default function DashboardProductCards() {
    //   const {data: apiData, isLoading, error} = useSWR("/adverts/vendor/dashboard", apiFetcher);



    return (
        <section className="flex justify-between md:mt-10">
            <div className="bg-darkest-heading md:p-6 rounded-lg md:space-y-4 w-[350px]">
                {/* Basic Ads Card */}
                <div className="flex group bg-white hover:bg-gradient-to-r from-[#386B52] shadow:md to-[#3C996C] h-20 w-full justify-between items-center md:px-4 rounded-md shadow transition-colors duration-300">
                    <div className="flex flex-col text-left">
                        <h1 className="text-xl font-bold text-green-900 font-lato group-hover:text-white transition-colors duration-300">2+</h1>
                        <p className="text-sm text-secondary-text font-lato group-hover:text-dark-border transition-colors duration-300">Basic Ads</p>
                    </div>
                    <div className="text-green-500 animate-bounce group-hover:text-dark-border transition-colors duration-300">
                        <ChartNoAxesColumn />
                    </div>
                </div>

                {/* Enterprise Ads Card */}
                <div className="flex group bg-white hover:bg-gradient-to-r from-[#386B52] shadow:md to-[#3C996C] md:h-20 md:w-full justify-between items-center md:px-4 rounded-md shadow transition-colors duration-300">
                    <div className="flex flex-col text-left">
                        <h1 className="text-xl font-bold text-darkest-heading font-lato group-hover:text-white transition-colors duration-300">10</h1>
                        <p className="text-sm text-secondary-text font-lato group-hover:text-dark-border transition-colors duration-300">Entreprise Ads</p>
                    </div>
                    <div className="text-green-500 animate-bounce group-hover:text-white transition-colors duration-300">
                        <ChartNoAxesColumn />
                    </div>
                </div>
            </div>

            {/* Impressions Card */}
            <div className="bg-darkest-heading rounded-lg w-[250px] text-white md:py-5">
                <p className="flex font-lato justify-around mb-5">4.673 <br /> Impressions</p>
                <div className=" flex">
                    <img src={Linechart} alt="" />
                </div>
            </div>

            <div className="bg-darkest-heading md:p-6 rounded-lg md:space-y-4 md:w-[350px]">
                {/* Active Ads Card */}
                <div className="flex group bg-white hover:bg-gradient-to-r from-[#386B52] shadow:md to-[#3C996C]  md:h-20 md:w-full justify-between items-center px-4 rounded-md shadow transition-colors duration-300">
                    <div className="flex flex-col text-left">
                        <h1 className="md:text-xl font-bold text-darkest-heading font-lato group-hover:text-white transition-colors duration-300">50+</h1>
                        <p className="text-sm text-secondary-text font-lato group-hover:text-dark-border transition-colors duration-300">Active Ads</p>
                    </div>
                    <div className="text-green-500 animate-bounce group-hover:text-white transition-colors duration-300">
                        <ChartNoAxesColumn />
                    </div>
                </div>

                {/* Total Ads Card */}
                <div className="flex group bg-white hover:bg-gradient-to-r from-[#386B52] shadow:md to-[#3C996C] md:h-20 md:w-full justify-between items-center md:px-4 rounded-md shadow transition-colors duration-300">
                    <div className="flex flex-col text-left">
                        <h1 className="text-xl font-bold text-darkest-heading font-lato group-hover:text-white transition-colors duration-300">60+</h1>
                        <p className="text-sm text-secondary-text font-lato group-hover:text-dark-border transition-colors duration-300">Total Ads</p>
                    </div>
                    <div className="text-green-500 animate-bounce group-hover:text-white transition-colors duration-300">
                        <ChartNoAxesColumn />
                    </div>
                </div>
            </div>

        </section>
    )
}
