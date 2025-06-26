import product4 from "../assets/product4.svg"
import { apiFetcher } from "@/api/client"
import { BeatLoader } from "react-spinners"
import { useSearchParams } from "react-router"
import { useEffect } from "react"
import useSWR from "swr"
import { MapPin } from "lucide-react"
import { X } from "lucide-react"
import EditAd from "./EditAd"
import DeleteAd from "./DeleteAd"

export default function Productimage({isVisible, setisVisible,product}) {
    
   
    return (
        <div style={{display: isVisible ? 'flex' : 'none'}} className="flex flex-col">
            <div className="md:w-[360px] pt-15 relative">
                <img src={product?.images?.[0]?.url || product4} alt="" className="h-70 w-100 rounded-2xl"/>
                <X className="absolute top-2 right-2 text-white cursor-pointer bg-black p-1 rounded-full"/>
            </div>
            <div className="md:py-3 md:w-[360px] bg-white border-15 border-white flex flex-col rounded-sm h-75">
                <div>
                    <h1 className="font-lato text-lg">{product?.productTitle}</h1>
                    <p className="font-lato text-sm text-secondary-text md:mt-2">{product?.description}</p>
                    <div className="flex flex-col justify-between">
                        <h1 className="font-lato font-bold mt-3"><span className="text-xs">GHC</span>{product?.price}0</h1>
                        <div className="flex">
                            <MapPin className="h-4 w-4 mt-3"/>
                            <p className="font-lato text-secondary-text mt-2">{product?.location}</p>
                        </div>
                        
                        <EditAd product={product} />
                        <DeleteAd id={product?.id} />
                        
                    </div>
                </div>
            </div>
        </div>

    )
};