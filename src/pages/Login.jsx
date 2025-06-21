// import {  Flex, Text, Button } from "@radix-ui/themes"
import eye from "../assets/images/eye.png";
import google from "../assets/images/google.webp";
import apple from "../assets/images/apple.png";
import img1 from "../assets/images/signup.png";
import logo from "../assets/signUp-logo.svg";
import checkbox from "../assets/images/checkbox.png";
import { useState } from "react";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    

    const togglePassword = () => setShowPassword((prev) => !prev);
 


    return (
        <div className=" h-screen bg-[url('./assets/images/signup.png')] bg-center  bg-cover">
            <div className=" relative z-10">
                <img src={logo} alt="Logo" className=""/>
            </div>
            <div className="absolute inset-0  bg-black/50"></div>

            <div className="flex flex-col-reverse md:flex-row items-center  justify-between md:px-40">

                {/* Left Text Section */}
                <div className="ml-35 z-10 md:mt-10 md:ml-0 text-white ">
                    <h3 className=" text-4xl md:text-5xl font-medium mb-5 ">Dont have an <br />Account yet?</h3>
                    <button className="mr-25 w-60 md:mr-0 border md:h-14 font-bold rounded-full p-2 mt-4 md:w-65 hover:bg-[#32BB78] hover:border-none">
                        <a href="">SignUp</a>
                    </button>
                </div>

                {/* Right Form Section */}
                <form className="md:mt-5 backdrop-blur-md bg-white/20 border border-white/30 rounded-xl shadow-xl p-6 text-white ">
                    <h3 className="text-4xl mt-5 font-normal font-lato   mb-2">Welcome back!</h3>
                    <p className="mb-10">Login to your account</p>

                    {/* email and password*/}
                    <div className="flex flex-col gap-4">
                        {/* email */}
                        <input type="email" placeholder="Enter Your Email" required className="bg-white text-black rounded p-3 border-1 md:w-96" />
                        {/* password and showpassword inputs */}
                        <div className="flex items-center bg-white border text-black border-gray-300 rounded p-3 pr-6 ">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                required
                                className="flex-1 text-black bg-transparent outline-none"
                            />
                            <img
                                src={eye}
                                alt="Toggle visibility"
                                className="h-6 w-6 cursor-pointer"
                                onClick={togglePassword}
                            />
                        </div>

                    </div>
                    {/* buttom sections */}
                    <button type="submit" className="bg-[#B2BB32] text-[#143324] w-full rounded-3xl py-3  mt-3 font-medium ">
                        LogIn
                    </button>
                    <div className='flex justify-around space-x-46  mt-10 text-xs'>
                            <div className='flex space-x-1 text-[#A9ADCC]'>
                                <img className='h-4 w-4' src={checkbox} alt="" />
                                <p>Remember me</p>
                            </div> 
                            <p className='underline text-white font-thin text-xs'>Forgot password?</p>
                        </div>
                    <div className="flex items-center mt-5 space-x-2 text-sm text-white my-2">
                        <hr className="flex-1 " />
                        <span className="font-thin">or continue with</span>
                        <hr className="flex-1 " />
                    </div>
                    <div className="flex flex-col mt-5 mb-10 sm:flex-row gap-4 sm:justify-between">
                        <button className="flex items-center justify-center bg-none text-white py-2 rounded-3xl w-full sm:w-[48%] border border-gray-300 hover:bg-[#32BB78] hover:border-none">
                            <img src={google} alt="" className="h-5 w-5 mr-2" />
                            Google
                        </button>
                        <button className="flex items-center justify-center bg-darkest-heading  text-white py-2 rounded-full w-full sm:w-[48%] hover:bg-[#32BB78] ">
                            <img src={apple} alt="" className="h-4 w-4 mr-2" />
                            Apple
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}