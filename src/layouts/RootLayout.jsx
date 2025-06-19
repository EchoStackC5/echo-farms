
import { TooltipProvider } from "@/components/ui/tooltip";
// import * as React from "react";
import { Outlet } from "react-router";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


export default function RootLayout() {
    return (
        <div className="felx w-full">
            <TooltipProvider>
                <Sidebar />
            </TooltipProvider>
            <div className="flex flex-col pl-1 md:pl-60 w-full">
                <Navbar/>
                <div className="bg-backgrounds min-h-screen p-2 md:p-8 ">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}