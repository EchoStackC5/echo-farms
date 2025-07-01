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


export default function Productimage({ isVisible, product,onClose }) {


    return (
        <div style={{ display: isVisible ? 'flex' : 'none' }} className="flex flex-col max-w-sm mx-auto">
            <div className=" relative group">
                <img src={product?.images?.[0]?.url || product4} alt="" className="h-64 w-full object-cover rounded-t-2xl shadow-lg " />
                <X className="absolute top-2 right-2 text-darkest-heading cursor-pointer bg-white/80 p-1 rounded-full" onClick={onClose} title="Close" />
            </div>
            <div className="bg-white shadow-2xl rounded-b-2xl border-t-0 p-6 hover:shadow-xl transition-shadow duration-300">
                <div >
                    <div className="space-y-4">
                        <h1 className="font-lato text-secondary-text font-medium text-lg">{product?.productTitle}</h1>
                    <p className="font-lato text-sm text-secondary-text md:mt-2">{product?.description}</p>
                    <div className="flex flex-col w-full space-y-2">
                        <h1 className="font-lato font-bold mt-3 flex items-center gap-2 text-xl text-darkest-headings "><span className="text-xs">GHC</span>{product?.price}.00</h1>
                        <div className="flex gap-2">
                            <MapPin className="h-4 w-4 mt-3" />
                            <p className="font-lato text-secondary-text mt-2">{product?.location}</p>
                        </div>
                    </div>
                    
                        <div className="  w-full space-y-2 mt-6">
                          <EditAd product={product}  />

                        <DeleteAd id={product?.id}  />  
                        </div>

                        

                    </div>
                </div>
            </div>
        </div>

    )
};