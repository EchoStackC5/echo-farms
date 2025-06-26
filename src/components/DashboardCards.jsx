// import {  Flex, Text, Button } from "@radix-ui/themes"
import { useNavigate } from "react-router";
import useSWR from "swr";
import correct1 from "../assets/correct1.png"
import { apiFetcher } from "@/api/client";
export default function DashboardCards() {
    //  const navigate = useNavigate();
  const userId = localStorage.getItem("USER_ID");
  const { data } = useSWR(`/profile/${userId}`, apiFetcher);
    return (
        <section className="flex justify-between">
            <div className="space-y-6">
                <div className="font-font-satoshi">
                    <h1 className=" text-xl md:text-2xl font-lato text-darkestHeading ">Good morning, <span className="text-[#32BB78] font-lato"> {(data ? `${data.firstName ?? ""} ${data.lastName ?? ""}`.trim() : "unknown User")}</span></h1>
                    <p className=" text-lg text-secondary-text font-lato">Manage all activities here here!</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <h1 className="font-lato md:text-xl">Verified Vendor</h1>
                <div className="h-[60px] w-[60px] rounded-full bg-[#32BB781A] flex items-center justify-around">
                    <img src={correct1} alt="" className="h-[45px] w-[50px]" />
                </div>
            </div>
        </section>
    )
}



