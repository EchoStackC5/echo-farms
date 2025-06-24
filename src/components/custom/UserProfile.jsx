import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserProfile(){
    return(
        <div className="bg-white text-darkest-heading rounded-full hover:bg-none">
            <DropdownMenu >
        <DropdownMenuTrigger asChild className="ml-auto ">
          <Button variant="ghost" className="  flex gap-x-1 md:gap-x-3 items-center p-2 md:p-6 hover:bg-transparent border-none">
            <Avatar className="w-8 h-8 ml-0 mt-2">
              <AvatarImage src="https://github.com/shadcn.png" alt="userProfile" />
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
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
        </div>
    )
}