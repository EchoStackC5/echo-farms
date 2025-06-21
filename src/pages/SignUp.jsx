// import {  Flex, Text, Button } from "@radix-ui/themes"
import eye from "../assets/images/eye.png";
import google from "../assets/images/google.webp";
import apple from "../assets/images/apple.png";
import img1 from "../assets/images/signup.png";
import logo from "../assets/EcologoEditable.svg";
import { useState } from "react";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)


    return (
        <div className=" h-screen bg-[url('./assets/images/signup.png')] bg-center  bg-cover">
            <img src={logo} alt="Logo" />
            <div className="absolute inset-0 z-0 bg-black/50"></div>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between md:px-40">

                {/* Left Text Section */}
                <div className="ml-35 md:mt-50 md:ml-0 text-white ">
                    <h3 className="text-4xl font-medium">Already have an <br />Account?</h3>
                    <button className="border border-gray-50  rounded-3xl p-2 mt-4 w-44 hover:bg-[#143324] hover:border-none">
                        <a href="">Login</a>
                    </button>
                </div>

                {/* Right Form Section */}
                <form className="md:mt-10 backdrop-blur-md bg-white/40 border border-white/30 rounded-xl shadow-xl p-6 text-white ">
                    <h3 className="text-3xl font-bold mb-2">Create an Account</h3>
                    <p className="mb-4">Join the Leading Marketplace for Agricultural Products</p>

                    {/* Name Inputs */}
                    <div className="flex flex-row space-x-4 md:flex-row md:space-x-8 mb-4">
                        <input type="text" placeholder="First Name" required className="w-44 bg-white text-black rounded p-3 border-1  md:mb-0 md:w-44" />
                        <input type="text" placeholder="Last Name" required className="w-44 bg-white text-black rounded p-3 border-1 md:w-44" />
                    </div>

                    
                    <div className="flex flex-col gap-4">
                        {/* email */}
                        <input type="email" placeholder="Enter Your Email" required className="bg-white text-black rounded p-3 border-1 md:w-96" />
                        {/* password and showpassword inputs */}
                        <div className="flex items-center bg-white border text-black border-gray-300 rounded p-3 pr-6 ">
                            <input
                                type={showConfirm ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Enter your password"
                                required
                                className="flex-1 text-black bg-transparent outline-none"
                            />
                            <img
                                src={eye}
                                alt="Toggle visibility"
                                className="h-6 w-6 cursor-pointer"
                                onClick={() => setShowPassword((prev) => !prev)}
                            />
                        </div>
                        <div className="flex items-center bg-white border text-black border-gray-300 rounded p-3 pr-6 ">
                            <input
                                type={showConfirm ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm Your Password"
                                required
                                className="flex-1 bg-transparent outline-none"
                            />
                            <img
                                src={eye}
                                alt="Toggle visibility"
                                className="h-6 w-6 cursor-pointer"
                                onClick={() => setShowConfirm((prev) => !prev)}
                            />
                        </div>

                    </div>
                    {/* buttom sections */}
                    <button type="submit" className="bg-[#B2BB32] text-[#001008] w-full rounded-3xl py-3 text-sm mt-3">
                        Create Account
                    </button>
                    <div className="flex items-center space-x-2 text-sm text-white my-2">
                        <hr className="flex-1 border-gray-300" />
                        <span>or continue with</span>
                        <hr className="flex-1 border-gray-300" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
                        <button className="flex items-center justify-center bg-none text-black py-2 rounded-3xl w-full sm:w-[48%] border border-gray-300 hover:bg-[#143324] hover:border-none">
                            <img src={google} alt="" className="h-5 w-5 mr-2" />
                            Google
                        </button>
                        <button className="flex items-center justify-center bg-none border border-gray-300 text-white py-2 rounded-full w-full sm:w-[48%] hover:bg-[#143324] hover:border-none">
                            <img src={apple} alt="" className="h-4 w-4 mr-2" />
                            Apple
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}