// import {  Flex, Text, Button } from "@radix-ui/themes"
import DashboardCards from "@/components/DashboardCards"
import DashboardProductCards from "@/components/DashboardProductCards"
export default function Home(){
    return(
        <div>
            {/* Greetings will go here */}
            <DashboardCards/>
            <DashboardProductCards/>
            <p>🔥Hot in the market place</p>

            <p className="bg-amber-950 text-shadow-indigo-300 font-extrabold text-9xl">This is Dashboard</p>
        </div>
    )
}