import img1 from "../assets/productDetail1.svg";
import shadow from "../assets/productShawdow.svg";
import ratings from "../assets/yellowRating.svg";
import img2 from "../assets/productDetail2.svg";
import img3 from "../assets/productDetail3.svg";

export default function ProductDetailsCard() {
    return (
        <section className="bg-[#F5FAF8] h-[full]">
            <div className="md:flex space-x-12 ">
                <div className=" bg-[#143324] h-[602px] w-[697px] flex ml-6 items-center mt-6">
                    <img src={shadow} alt="" className="absolute mt-85 md:w-[670px] " />
                    <img src={img1} alt="" className="w-[445px] h-[472px] md:ml-25 relative " />
                </div>
                <div className=" h-[506px] w-[589px] mr-2  "> 
                    <h6 className="text-sm mt-10 "><span className="font-medium">Location:</span> Greater Accra</h6>
                    <h6 className="text-sm mt-1"><span className="font-medium">Availability:</span> Only 2 in stocks</h6>
                    <h3 className="text-2xl text-[#143324] font-bold pt-2">AGROBOOST ORAGANIC FERTILIZER - 50KG</h3>
                    <img src={ratings} alt="" className="mt-2" />
                    <p className=" break-words max-w-[450px] text-wrap leading-snug text-[#507362] font-inter mt-3">
                        AgroBoost Organic Fertilizer is a premium-grade soil enhancer designed to improve crop yield and promote healthy plant growth. Perfect for vegetables, grains, fruits, and general farm use.
                    </p>
                    <hr className="mt-10"/>
                    <div className="space-x-3  mt-10">
                            <button className="rounded-full text-xs  bg-white shadow-sm border-1 border-[#F5FAF8] w-[114px] h-[39px] text-[#507362]">
                            crop protection
                        </button >
                        <button className="rounded-full text-xs  bg-white shadow-sm border-1 border-[#F5FAF8] w-[164px] h-[39px] text-[#507362]">
                            seed & planting materials
                        </button>
                    </div>
                    <hr className="mt-10"/>
                    <div>
                            <h3 className="font-inter font-medium text-[#143324] mt-5 ">USD(incl. of all taxes)
                                :</h3>
                                <h2 className="text-4xl font-normal text-[#143324] mt-1 ">GHC 600.72 <span className="text-3xl text-gray-300 font-thin">GHC 800.00</span></h2>
                        </div>
                    <div className=" mb-30 mt-6 ">
                        <button className="w-[54.49px] h-[44.18px]  text-2xl font-normal shadow-md border hover:border-white ">
                            -
                        </button>
                        <button className="w-[54.49px] h-[44.18px]  text-2xl font-normal shadow-md border hover:border-white rounded ">
                            1
                        </button>
                        <button className="w-[54.49px] h-[44.18px]  text-2xl font-normal shadow-md border hover:border-white rounded ">
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 w-[600px] gap-30 ml-6 mt-10">
                <div className=" bg-white border-[#DAF2E6] h-[192px] w-[204px] flex items-center pl-10 border-1">
                    <img src={img1} alt="" className="h-[137px] w-[129px]" />
                </div>
                <div className=" bg-white border-[#DAF2E6] h-[192px] w-[204px] flex items-center pl-10 border-1">
                    <img src={img2} alt="" className="h-[137px] w-[129px]" />
                </div>
                <div className=" bg-white border-[#DAF2E6] h-[192px] w-[204px] flex items-center pl-10 border-1">
                    <img src={img3} alt="" className="h-[137px] w-[129px]" />
                </div>
            </div>

        </section>
    )
}