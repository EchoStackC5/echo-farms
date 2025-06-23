// import {  Flex, Text, Button } from "@radix-ui/themes"
import ProductSearchBar from "./ProductSearch"
import { Bell, } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import logo from "../assets/signUp-logo.svg";
import profile from "../assets/images/profile1.jpg";


export default function ProductNavBar() {
    return (

        <nav className="sticky top-0 z-50 bg-darkest-heading w-full px-4 md:px-10 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                {/* the Logo */}
                <div className="">
                    <img src={logo} alt="Logo"  />
                </div>

                {/* the icons on the right side */}
                <div className="flex items-center space-x-4 md:space-x-10">
                    <div className="bg-white h-10 w-10 rounded-full border flex items-center justify-center text-[#32BB78]">
                        <Bell />
                    </div>
                    <div className="bg-white h-10 w-10 rounded-full border flex items-center justify-center text-[#32BB78]">
                        <ShoppingCart />
                    </div>

                    {/* Profile Button */}
                    <button className="bg-white rounded-full w-auto h-[42px] md:w-[213px] px-4  flex items-center space-x-2 md:space-x-4">
                        <img
                            src={profile}
                            alt="Profile"
                            className="h-10 w-10  rounded-full"
                        />
                        <p className="text-sm md:text-base text-gray-600">Theodora</p>

                        {/* Dropdown Arrow */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

    )
}

