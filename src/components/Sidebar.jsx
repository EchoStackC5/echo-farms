import { Link, NavLink } from "react-router"
// import SETUPS from "../constants/Sidebar";
import EchoFarmsLogo from "../assets/EcoLogoEditable.svg"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Home, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import Modal from "./Modal";

import { LayoutDashboard,Megaphone} from "lucide-react";

 const SETUPS =[
        {
            icon: <LayoutDashboard/>,
            title: "Dashboard",
            path: "/dashboard",
        },
        {
            icon: <Megaphone/>,
            title: "Manage Ads",
            path: "manage-ads"
        },
        //  {
        //     icon: <Megaphone/>,
        //     title: "Add Form",
        //     path: "ad-form"
        // },

    ]
export default function Sidebar({ isOpen, onClose }){
    return (
      <>
      <div
        className={`fixed inset-0 z-20 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={onClose}
      />
<aside className={`
        fixed inset-y-0 w-60 left-0 z-30 shadow-sm gap-y-12 px-5 py-8 flex-col border-r-2 bg-background
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:flex
      `}>
      <div className="flex flex-col items-center gap-y-12 w-full">
        <Link
          to="/"
          className=" flex shrink-0 items-center justify-center  rounded-full  text-lg font-semibold text-primary  md:text-base"
        >
          <img src={EchoFarmsLogo} alt="echobook logo" />
        </Link>
      </div>

      <nav className="flex flex-col items-start gap-y-10 sm:py-4 text-base">
        

        <div className="flex flex-col gap-y-3 ">
          <span className="text-sm uppercase font-semibold">0verview</span>
          {SETUPS.map(({ icon, title, path }, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-x-6 w-full justify-start hover:bg-primary hover:text-white px-3 py-2 rounded-md
                  ${isActive ? "bg-primary text-white " : ""} `
              }
              onClick={onClose}
              end
            >
              <span className="flex size-5">{icon}</span>
              <span className="">{title}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <nav className="mt-auto flex flex-col items-start gap-y-10 sm:py-4 text-base">
        <Tooltip>
          <TooltipTrigger asChild>
            <Modal
              trigger={
                <Button
                  variant="ghost"
                  className="flex items-center justify-center gap-x-7 rounded-lg p-0 transition-colors hover:text-foreground/60 hover:bg-transparent "
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </Button>
              }
              headerText="Do you want to logout?"
            />
          </TooltipTrigger>
          <TooltipContent side="right">Logout</TooltipContent>
          
        </Tooltip>
      </nav>
    </aside>
    
    </>
    )
}