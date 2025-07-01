import product1 from "@/assets/product1.svg";
import { MapPin } from 'lucide-react';
import productRating from "@/assets/productDarkRating.svg"
import trackVideo from "@/assets/videos/trackVideo.mp4";
import product2 from "@/assets/product2.svg";
import product3 from "@/assets/product3.svg";
import product4 from "@/assets/product4.svg";
import product5 from "@/assets/product5.svg";
import product6 from "@/assets/product6.svg";
import product7 from "@/assets/product7.svg";
import { apiFetcher } from "@/api/client";
import useSWR from "swr";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router";


const Products = [
    {
        img: product1,
        title: "Caterpillar D6R Bulldozer – Heavy-Duty Land Clearing",
        Description: "Powerful and durable bulldozer ideal for clearing farmlands",
        price: "Ghc 50,000",
        location: "Greater Accra -East Lego"
    },
    {
        img: trackVideo,
        title: "Caterpillar D6R Bulldozer – Heavy-Duty Land Clearing",
        Description: "Powerful and durable bulldozer ideal for clearing farmlands",
        price: "Ghc 50,000",
        location: "Greater Accra -East Lego",
        isVideo: true
    },
    {
        img: product2,
        title: "Caterpillar D6R Bulldozer – Heavy-Duty Land Clearing",
        Description: "Powerful and durable bulldozer ideal for clearing farmlands",
        price: "Ghc 50,000",
        location: "Greater Accra -East Lego"
    },
    {
        img: product2,
        title: "Caterpillar D6R Bulldozer – Heavy-Duty Land Clearing",
        Description: "Powerful and durable bulldozer ideal for clearing farmlands",
        price: "Ghc 50,000",
        location: "Greater Accra -East Lego"
    },
    {
        img: product3,
        title: "Caterpillar D6R Bulldozer – Heavy-Duty Land Clearing",
        Description: "Powerful and durable bulldozer ideal for clearing farmlands",
        price: "Ghc 50,000",
        location: "Greater Accra -East Lego"
    },
    {
        img: product4,
        title: "Caterpillar D6R Bulldozer – Heavy-Duty Land Clearing",
        Description: "Powerful and durable bulldozer ideal for clearing farmlands",
        price: "Ghc 50,000",
        location: "Greater Accra -East Lego"
    },
    {
        img: product5,
        title: "Caterpillar D6R Bulldozer – Heavy-Duty Land Clearing",
        Description: "Powerful and durable bulldozer ideal for clearing farmlands",
        price: "Ghc 50,000",
        location: "Greater Accra -East Lego"
    },
    {
        img: product6,
        title: "Caterpillar D6R Bulldozer – Heavy-Duty Land Clearing",
        Description: "Powerful and durable bulldozer ideal for clearing farmlands",
        price: "Ghc 50,000",
        location: "Greater Accra -East Lego"
    },
    {
        img: product7,
        title: "Caterpillar D6R Bulldozer – Heavy-Duty Land Clearing",
        Description: "Powerful and durable bulldozer ideal for clearing farmlands",
        price: "Ghc 50,000",
        location: "Greater Accra -East Lego"
    },
];

export default function ProductpageCard() {
    const { data, isLoading, error } = useSWR("/adverts", apiFetcher);
    const navigate = useNavigate();
    // if (isLoading) {
    //     <div className="flex justify-center items-center h-screen">
    //             <BeatLoader size={80} color="#32BB78" />
    //         </div>
    // }

    if (error || !data) {
        return (
            <div>
                <p>Something went wrong</p>
            </div>
        )
    }



    return (
        <div className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {data.map((product, index) => (
                    <div
                        key={product._id || index}
                        className="w-full bg-backgrounds border border-light-border shadow-lg rounded-lg overflow-hidden"
                        onClick={() => {
                            if (product._id) {
                                navigate(`/product-details?id=${product._id}`);
                            } else {
                                console.warn("Product ID is missing");
                            }
                        }}

                    >
                        {/* Image Container with Overlay Badge */}
                        <div className="relative">
                            {product?.images?.[0]?.url ? (
                                <img
                                    src={product.images[0].url}
                                    alt="product"
                                    className="w-full md:h-[400px] h-[240px] object-cover"
                                />
                            ) : (
                                <video
                                    src={trackVideo}
                                    className="w-full md:h-[400px] h-[240px] object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls
                                    alt="fallback video"
                                />
                            )}
                            {/* Top Ad Badge Overlay */}
                            {product.plan === "Enterprise" && (
                                <div className="absolute top-3 left-3">
                                    <span className="border border-white text-xs rounded-full text-white px-3 py-1.5 flex items-center gap-1">
                                        🔥 Top Ad
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Product Information */}
                        <div className="p-4 space-y-3">
                            <h1 className="text-darkest-heading font-lato font-medium text-[16px] leading-tight line-clamp-2">
                                {product.productTitle}
                            </h1>

                            <p className="text-secondary-text text-sm font-medium font-roboto line-clamp-2">
                                {product.description}
                            </p>

                            <p className="text-darkest-heading font-lato text-lg font-semibold">
                                {product.price}
                            </p>

                            <div className="flex items-center gap-2 text-secondary-text font-inter text-sm">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                <span>{product.location}</span>
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <img src={productRating} alt="rating" className="h-4" />
                                <button className="border font-poppins font-medium border-darkest-heading text-darkest-heading py-2 px-4 rounded-full cursor-pointer hover:animate-pulse text-sm">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}