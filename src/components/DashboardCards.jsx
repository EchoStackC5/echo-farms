// import {  Flex, Text, Button } from "@radix-ui/themes"
import correct1 from "../assets/correct1.png"
export default function DashboardCards() {
    return (
        <section className="flex justify-between">
            <div className="space-y-6">
                <div className="font-font-satoshi">
                    <h1 className=" text-xl md:text-2xl font-bold text-darkestHeading ">Good morning, <span className="text-green-500">Abigail!</span>😊</h1>
                    <p className="text-muted-foreground text-sm">Manage all activities here here!</p>
                </div>
            </div>

            <div className="flex">
                <h1>Verified Vendor</h1>
                <div className="h-[65px] w-[65px] rounded-full bg-[#32BB781A]">
                    <img src={correct1} alt="" className="h-[65px] w-[65px]" />
                </div>
            </div>
        </section>
    )
}