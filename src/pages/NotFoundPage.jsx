import notfound from "../assets/images/404.png";
import notF from "../assets/images/notF.png";
import ProductsNav from "@/components/custom/ProductsNav";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <div>
            <ProductsNav/>
            <div className="relative h-60 w-full overflow-hidden">
                {/* Background image */}
                <img
                    src={notfound}
                    alt=""
                    className="h-full w-full object-cover"
                />

                {/* Soft dark overlay */}
                <div className="absolute inset-0 bg-black/70 z-10"></div>

                {/* Optional text */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <h2 className="text-white text-xl font-semibold">Your Best Agricultural Market</h2>
                </div>
            </div>
             
             <div>
                <img src={notF} alt="" className="h-auto w-full" />
             </div>
               <h3 className="text-center font-bold pl-5 pt-5 text-3xl">OOPS!</h3>
              <p className="text-sm pt-10  text-center"> Looks like we can't find what you're looking for</p>
              <div className="flex justify-center items-center mt-10 ml-4 mb-6">
                <button className="rounded-full  text-sm bg-[#143324] w-[179px] h-[44px] text-white">
                            Go Back
                        </button> 
              </div>
             <Footer/>
        </div>
    )
}