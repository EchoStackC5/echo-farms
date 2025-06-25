import product4 from "../assets/product4.svg"
import { apiFetcher } from "@/api/client"
import { BeatLoader } from "react-spinners"
import { useSearchParams } from "react-router"
import { useEffect } from "react"
import useSWR from "swr"

export default function Productimage({isVisible, setisVisible,product}) {
    // const [searchParams] = useSearchParams();
    // const id = searchParams.get("id");

    // const {data, isloading, error} = useSWR(`/adverts/${id}`, apiFetcher);

    // if (isloading) {
    //     return(
    //         <div>
    //             <BeatLoader color="#36d7b7" size={100} className="flex justify-center items-center h-full w-full" />
    //         </div>
    // )};
    // if (error) {
    //     return (
    //         <div className="flex justify-center items-center h-full w-full">
    //             <p className="text-red-500">Error loading product details</p>
    //         </div>
    //     );
    // }
   
    return (
        <div style={{display: isVisible ? 'flex' : 'none'}} className="flex flex-col">
            <div className="md:w-[360px] h-[445px] pt-15">
                <img src={product?.images?.[0]?.url || product4} alt="" />

            </div>
            <div className="md:py-3 md:w-[360px] bg-white border-15 border-white flex flex-col rounded-sm h-75">
                <div>
                    <h1 className="font-lato text-lg">{product?.productTitle}</h1>
                    <p className="font-lato text-sm text-secondary-text md:mt-2">{product?.description}</p>
                    <div className="flex flex-col justify-between">
                        <h1 className="font-lato font-bold mt-3"><span className="text-xs">GHC</span>{product?.price}0</h1>
                        <p className="font-lato text-secondary-text mt-2">{product?.location}</p>
                        <div className="group mt-3">
                            <button className="font-lato md:h-8 md:w-70 bg-white border border-green-buuton rounded-full mb-3 hover:bg-yellow-button group-hover:text-black transition-colors text-primary-color cursor-pointer">Edit Ad</button>
                        </div>
                        <div className="group">
                            <button className="font-lato md:h-8 md:w-70 bg-white border border-green-buuton rounded-full group-hover:bg-yellow-button group-hover:text-black transition-colors text-primary-color cursor-pointer">Delete Ad</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};