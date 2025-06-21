// import {  Flex, Text, Button } from "@radix-ui/themes"
import eye from "../assets/images/eye.png";
import google from "../assets/images/google.webp";
import apple from "../assets/images/apple.png";
import img1 from "../assets/images/signup.png";
import logo from "../assets/signUp-logo.svg";
import { useState } from "react";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirm = () => setShowConfirm((prev) => !prev);


    return (
        <div className=" h-screen bg-[url('./assets/images/signup.png')] bg-center  bg-cover">
            <div className=" relative z-10">
                <img src={logo} alt="Logo" className=""/>
            </div>
            <div className="absolute inset-0  bg-black/50"></div>

            <div className="flex flex-col-reverse md:flex-row items-center  justify-between md:px-40">

                {/* Left Text Section */}
                <div className="ml-35 z-10 md:mt-15 md:ml-0 text-white ">
                    <h3 className="text-4xl mr-20 md:mr-0 md:text-5xl mb-4 font-medium ">Already have an <br />Account?</h3>
                    <button className="border h-14 mr-30 md:mr-0 font-bold rounded-full p-2 mt-4 w-65 hover:bg-[#32BB78] hover:border-none">
                        <a href="">Login</a>
                    </button>
                </div>

                {/* Right Form Section */}
                <form className="md:mt-10 backdrop-blur-md bg-white/20 border border-white/30 rounded-xl shadow-xl p-6 text-white ">
                    <h3 className="text-3xl font-normal mb-2">Create an Account</h3>
                    <p className="mb-4">Join the Leading Marketplace for Agricultural Products</p>

                    {/* Name Inputs */}
                    <div className="flex flex-col gap-4 md:gap-2  md:flex-row md:space-x-6 mb-4">
                        <input type="text" placeholder="First Name" required className="w-96  bg-white text-black rounded p-3 border-1  md:mb-0 md:w-44" />
                        <input type="text" placeholder="Last Name" required className="w-96 bg-white text-black rounded p-3 border-1 md:w-44" />
                    </div>

                    
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
                        <div className="flex items-center bg-white border text-black border-gray-300 rounded p-3 pr-6 ">
                            <input
                                type={showConfirm ? "text" : "password"}
                                name="password"
                                placeholder="Confirm Your Password"
                                required
                                className="flex-1 bg-transparent outline-none"
                            />
                            <img
                                src={eye}
                                alt="Toggle visibility"
                                className="h-6 w-6 cursor-pointer"
                                onClick={toggleConfirm}
                            />
                        </div>

                    </div>
                    {/* buttom sections */}
                    <button type="submit" className="bg-[#B2BB32] text-[#143324] w-full rounded-3xl py-3  mt-3 font-medium">
                        Create Account
                    </button>
                    <div className="flex items-center space-x-2 text-sm text-white my-2">
                        <hr className="flex-1 border-gray-300" />
                        <span>or continue with</span>
                        <hr className="flex-1 border-gray-300" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
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