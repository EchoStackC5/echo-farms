import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage, } from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link,useLocation, useNavigate } from "react-router";
// import DashboardSearchBar from "./DashboardSearchBar";
import DashboardSearchBar from "./DashboardSearchBar";
import Sidebar from "./Sidebar";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import _ from "lodash";
import { Fragment } from "react/jsx-runtime";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const paths = pathname.substring(1).split("/");

  // close or open sidebar
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
    <header className="sticky md:w-full top-0 z-30 flex h-14 items-center gap-4 border-b-2 shadow-sm bg-background px-2 md:px-8 py-10 ">
      <button
  size="icon"
  variant="outline"
  onClick={toggleSidebar}
  className="md:hidden"
>
  <Menu />
</button>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          {paths.length > 1 &&
            paths.map((path, index) => {
              if (index + 1 == paths.length)
                return (
                  <BreadcrumbItem key={index}>
                    <BreadcrumbPage>{_.startCase(path)}</BreadcrumbPage>
                  </BreadcrumbItem>
                );
              else
                return (
                  <Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink onClick={() => navigate(-1)} asChild>
                        <Link to="#"> {_.startCase(path)}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />{" "}
                  </Fragment>
                );
            })}
        </BreadcrumbList>
      </Breadcrumb>
      <DashboardSearchBar/>

      <DropdownMenu >
        <DropdownMenuTrigger asChild className="ml-auto">
          <Button variant="ghost" className="  flex gap-x-1 md:gap-x-3 items-center p-2 md:p-6">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="flex items-center gap-x-2 text-xs md:text-base font-semibold">
              Gloria Dedo <ChevronDown size={16} />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
    <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}/>
    </>
  );
};

export default Navbar;
