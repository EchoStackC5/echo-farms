import ProductNavBar from "@/components/ProductNavbar";
import ProductSearchBar from "@/components/ProductSearch";
import ProductCard from "@/components/ProductCard";
import droneImage from '../assets/images/drone.jpg';
import Harvester from '../assets/images/harv.png';


export default function Products() {


    return (
        <div className="bg-gray-100 relative">
            <ProductNavBar />

            {/* Banner Section */}
            <div className=" max-w-6xl w-[90%] mx-auto relative bg-cover bg-no-repeat rounded-xl overflow-hidden text-white flex items-center justify-between p-8 mt-[45px] mb-[45px] h-[60%] w-full bg-position-[center_bottom_-300px]"
                style={{ backgroundImage: `url(${droneImage})` }}>
                {/* Content */}
                <div className="space-y-4 z-10">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                        Smart Agricultural Spraying <br /> Drone – 16L Tank Capacity
                    </h2>
                    <p className="text-xs leading-relaxed max-w-md mt-15">
                        Precision drone for crop spraying and watering. Covers large fields quickly,
                        reduces chemical waste, and improves efficiency with GPS control and real-time flight feedback.
                    </p>
                    <button className="bg-[#d4f044] text-black font-semibold px-10 py-4 mt-25 rounded-full hover:bg-lime-400">
                        Buy Now
                    </button>
                </div>

                <div className="absolute top-6 right-6">
                    <span className="border border-white rounded-full px-4 py-1 text-sm">🔥Top Ad</span>
                </div>

                <div className="absolute right-6 bottom-6 flex space-x-2">
                    <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-300">‹</button>
                    <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-300">›</button>
                </div>
            </div>
            <ProductSearchBar />

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6,7,8,9].map(n => <ProductCard key={n} />)}
            </div>

            <div className="flex justify-center items-center mt-25">
                <img
                    src={Harvester}
                    alt={Harvester}
                    className="w-[90%] h-[85%] object-cover rounded-t-1xl"
                />
            </div>

        </div>
    );
}