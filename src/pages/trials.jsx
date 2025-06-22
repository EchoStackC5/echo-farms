
import { Link } from "react-router";
import personCounting from "../assets/personCounting.png"
export default function Boost() {
    return (
        <section className="relative z-10 bg-darkest-heading pt-16 px-4 text-white">
            <div className="flex flex-col md:flex-row justify-around mx-auto items-center">

                 <div className="flex flex-col gap-8 ">
                    <div>
                        <p className="text-lg font-inter text-white/70 font-bold">Boost your sales</p>
                        <h1 className=" text-3xl md:text-4xl font-bold font-inter">Increase your revenues</h1>
                    </div>
                    <p className="text-lg font-inter text-white/70 font-bold">Millions of our users are ordering from businesses<br></br> just like yours. Join Echo Farms,<br></br> expand your reach and increase sales.</p>
                     <Link to= "/sign-up" className="bg-yellow-button max-w-full md:max-w-xs w-full text-center text-darkest-heading px-6 py-3 text-lg font-roboto font-medium rounded-full -primary-color transition-all duration-200  hover:bg-primary-color active:bg-primary-color active:text-darkest-heading ">Register as a Vendor</Link>
                </div>


                <div className="max-w-lg  rounded-2xl overflow-hidden mt-6 ">
                    <img
                        src={personCounting}
                        alt="product image"
                        className="w-full  object-cover rounded-t-2xl"
                    />
                </div>
            </div>
        </section>
    )
}