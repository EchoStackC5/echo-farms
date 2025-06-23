// import {  Flex, Text, Button } from "@radix-ui/themes"
import { DataTableDemo } from "@/components/Productsdata"
import product4 from "../../assets/product4.svg"

export default function ManageAds() {
    return (
        <section>
            <div className="md:py-8">
                <h1 className="font-lato md:text-4xl">Manage Ads</h1>
                <p className="font-lato md:text-2xl">Manage all ads here !</p>
            </div>
            <div className="flex gap-8">
                <div className="bg-white border border-light-border rounded-2xl md:w-[750px]">
                    <DataTableDemo />
                </div>
                <div>
                    <div>
                        <img src={product4} alt=""/>
                    </div>
                    <div className="md:py-5 md:space-y-3 md:w-[400px] bg-white border border-light-border flex flex-col md:px-10 rounded-sm">
                        <h1 className="font-lato text-xl">All Purpose Fertilizer-Heavy Duty Crop Feeding</h1>
                        <button className="font-lato md:h-8 md:w-30 rounded-full bg-[#32BB781A] text-sm">Farm Machinery</button>
                        <p className="font-lato text-lg">Powerful and durable bulldozer ideal for clearing farmlands</p>
                        <div className="flex flex-col justify-between">
                            <h1 className="font-bold">GHC 50,000.00</h1>
                            <button className="font-lato md:h-10 md:w-90 bg-white border border-green-buuton rounded-full font-bold mb-4 hover:bg-yellow-button cursor-pointer">Edit Ad</button>
                            <button className="font-lato md:h-10 md:w-90 bg-white border border-green-buuton rounded-full font-bold hover:bg-yellow-button cursor-pointer">Delete Ad</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}