import React from "react";
import logo from "../assets/images/logo.png";
import { BellIcon } from "lucide-react";
import { User } from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";

export default function App() {
  return (
     <div className="w-full bg-[#103322] text-white py-3 px-6 flex items-center h-[107px] justify-between">
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="w-[115.27px] h-[57px]"
        />
      </div>
      <div className="flex items-center gap-4 w-[318px] h-[40px] ">
       <div className="w-10 h-10 bg-gray-100 border border-green-600 text-green-700 rounded-full flex items-center justify-center">
        <BellIcon/>
    </div>
        <div className="w-10 h-10 bg-gray-100 border border-green-600 text-green-700 rounded-full flex items-center justify-center">
            <ShoppingCartIcon/>
      
    </div>
        <div className="w-10 h-10 bg-gray-100 border border-green-600 text-green-700 rounded-full flex items-center justify-center">
            <User/>
      
    </div>
        <div className="text-right">
          <p className="text-sm text-left font-medium">User</p>
          <p className="text-xs text-gray-300">user@gmail.com</p>
        </div>
      </div>
    </div>
  );
}