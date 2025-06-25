import { Button } from "@/components/ui/button";
import { ChevronDown, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { apiFetcher } from "@/api/client";
import { useNavigate } from "react-router";
import useSWR from "swr";
export default function UserProfile() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("USER_ID");
  const { data } = useSWR(`/profile/${userId}`, apiFetcher);

  function logout(){
    localStorage.removeItem("USER_ID"),
    navigate("/")
  }

  return (
    <div className="bg-white text-darkest-heading rounded-full hover:bg-none">
      <DropdownMenu >
        <DropdownMenuTrigger asChild className="ml-auto ">
         <Button variant="ghost" className="  flex gap-x-1 md:gap-x-3 items-center p-2 md:p-6 hover:bg-transparent border-none">
            {data && (data.firstName || data.lastName) ? (
              <Avatar className="w-8 h-8 ml-0 mt-2">
                <AvatarImage src="https://github.com/shadcn.png" alt="userProfile" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ) : (
              <div className="bg-darkest-heading w-10 h-10 flex justify-center items-center rounded-full">
                <User className="w-16 h-16 ml-0 mt-2 text-gray-400" />
              </div>
              
            )}
            <span className="flex items-center gap-x-2 text-xs md:text-base font-semibold">
              {(data ? `${data.firstName ?? ""} ${data.lastName ?? ""}`.trim() : "unknown User")}  <ChevronDown size={16} />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <button onClick={logout}><DropdownMenuItem>Logout</DropdownMenuItem></button>

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}