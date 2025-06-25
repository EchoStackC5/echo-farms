import ProductpageCard from "./custom/ProductPageCard";
import img1 from "../assets/productDetail1.svg";
import shadow from "../assets/productShawdow.svg";
import ratings from "../assets/yellowRating.svg";
import img2 from "../assets/productDetail2.svg";
import img3 from "../assets/productDetail3.svg";
import Navbar from "../components/ProductNavbar";

export default function ProductDetailsCard() {
    return (
        <section className="bg-[#F5FAF8] min-h-screen px-4 py-8">
            <Navbar />
            <div className="flex flex-col md:mt-30 md:flex-row md:space-x-20">
                <div className="relative bg-[#143324] h-[550px] w-full md:w-[550px] flex ml-0 md:ml-6 items-center mt-6 rounded-2xl">
                    <img src={shadow} alt="" className="absolute mt-59 md:mt-90 w-[90%] md:w-[670px] " />
                    <img src={img1} alt="" className="w-[250px]  md:ml-20 md:w-[445px] h-[460px] relative animate-bounce-slight" />
                </div>
                <style>
                    {`
          @keyframes bounceSlight {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-bounce-slight {
            animation: bounceSlight 2s ease-in-out infinite;
          }
        `}
                </style>


                <div className="w-full mt-10 md:mt-0 md:h-[506px] md:w-[589px] mr-0 md:mr-2">
                    <h6 className="text-sm mt-10">
                        <span className="font-medium">Location:</span> Greater Accra
                    </h6>
                    <h6 className="text-sm mt-1">
                        <span className="font-medium">Availability:</span> Only 2 in stocks
                    </h6>
                    <h3 className="text-2xl text-[#143324] font-bold pt-2">
                        AGROBOOST ORAGANIC FERTILIZER - 50KG
                    </h3>
                    <img src={ratings} alt="" className="mt-2" />
                    <p className="break-words max-w-full md:max-w-[450px] text-wrap leading-snug text-[#507362] font-inter mt-3">
                        AgroBoost Organic Fertilizer is a premium-grade soil enhancer designed to improve crop yield and promote healthy plant growth. Perfect for vegetables, grains, fruits, and general farm use.
                    </p>
                    <hr className="mt-10" />
                    <div className="space-x-3 mt-10">
                        <button className="rounded-full text-xs bg-white shadow-sm border-1 border-[#F5FAF8] w-[114px] h-[39px] text-[#507362]">
                            crop protection
                        </button>
                        <button className="rounded-full text-xs bg-white shadow-sm border-1 border-[#F5FAF8] w-[164px] h-[39px] text-[#507362]">
                            seed & planting materials
                        </button>
                    </div>
                    <hr className="mt-10" />
                    <div>
                        <h3 className="font-inter font-medium text-[#143324] mt-5">
                            USD(incl. of all taxes):
                        </h3>
                        <h2 className="text-4xl font-normal text-[#143324] mt-1">
                            GHC 600.72{" "}
                            <span className="text-3xl text-gray-300 font-thin">GHC 800.00</span>
                        </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-6 md:space-x-30 mt-6">
                        <div className="flex mb-4 sm:mb-0 ">
                            <button className="w-[54.49px] h-[44.18px] text-2xl font-normal shadow-md border hover:border-white">
                                -
                            </button>
                            <button className="w-[54.49px] h-[44.18px] text-2xl font-normal shadow-md border hover:border-white rounded">
                                1
                            </button>
                            <button className="w-[54.49px] h-[44.18px] text-2xl font-normal shadow-md border hover:border-white rounded">
                                +
                            </button>
                        </div>
                        <button className="rounded-full text-sm bg-[#B2BB32] w-[179px] h-[44px] text-[#143324]">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>

            {/* Thumbnail images grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full md:w-[150px] gap-6 md:gap-50 ml-0 md:ml-6 mt-10">
                <div className="bg-white border-[#DAF2E6] h-[170px] w-full md:w-[150px] flex items-center pl-1 border-1">
                    <img src={img1} alt="" className="h-[137px] w-[129px]" />
                </div>
                <div className="bg-white border-[#DAF2E6] h-[170px] w-full md:w-[150px] flex items-center pl-1 border-1">
                    <img src={img2} alt="" className="h-[137px] w-[129px]" />
                </div>
                <div className="bg-white border-[#DAF2E6] h-[170px] w-full md:w-[150px] flex items-center pl-1 border-1">
                    <img src={img3} alt="" className="h-[137px] w-[129px]" />
                </div>
            </div>
            <ProductpageCard/>
        </section>

    )
}