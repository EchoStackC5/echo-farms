// import {  Flex, Text, Button } from "@radix-ui/themes"
import { Link } from "react-router";
import { apiClient } from "../api/client";
import { useNavigate } from "react-router";
import SubmitButton from "@/components/SubmitButton";


import eye from "../assets/images/eye.png";
import google from "../assets/images/google.webp";
import apple from "../assets/images/apple.png";
import img1 from "../assets/images/signup.png";
import logo from "../assets/images/newlogo.png";
import checkbox from "../assets/images/checkbox.png";
import { useState } from "react";

export default function login() {
    const navigate = useNavigate();
    const loginUser = async (data) => {
        try {
            const response = await apiClient.post("/auth/login", data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response);
            localStorage.setItem("ACCESS_TOKEN", response.data.token);
            localStorage.setItem("USER_ID", response.data.user.id);

            if (response.data.user.role === "vendor"){
                navigate("/dashboard")
            }else {
                navigate("/products")
            }
            
        } catch (error) {
            console.log(error);
        }
    }


    const [showPassword, setShowPassword] = useState(false);


    const togglePassword = () => setShowPassword((prev) => !prev);



    return (
        <div className="h-screen overflow-x-hidden bg-[url('./assets/images/newimage2.png')] bg-center bg-cover">
            {/* Logo */}
            <div className="relative z-10 px-4 pt-4 mb-4 md:mb-0">
                <img src={logo} alt="Logo" className="w-32 md:w-40" />
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 md:px-40">

                {/* Left Text Section */}
                <div className="text-white md:mt-10 text-center md:text-left">
                    <h3 className="text-3xl md:text-5xl font-medium mb-5">
                        Don’t have an <br />Account yet?
                    </h3>
                    <button className="w-full sm:w-48 font-bold rounded-full p-2 mt-4 border hover:bg-[#32BB78] hover:border-none">
                        <Link to="/sign-up">Sign Up</Link>
                    </button>
                </div>

                {/* Right Form Section */}
                <form action={loginUser} className="w-full max-w-[450px] md:mt-5 backdrop-blur-md bg-darkest-heading border-white/30 rounded-xl shadow-xl p-7  text-white" onSubmit={loginUser}>
                    <h3 className="text-3xl md:text-4xl mt-5 font-normal font-lato mb-2">Welcome back!</h3>
                    <p className="mb-10">Login to your account</p>

                    {/* Email & Password Inputs */}
                    <div className="flex flex-col gap-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            required
                            className="bg-white text-black rounded p-3 border w-full"
                        />

                        <div className="flex items-center bg-white border text-black border-gray-300 rounded p-3 pr-6">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                required
                                className="flex-1 bg-transparent outline-none"
                            />
                            <img
                                src={eye}
                                alt="Toggle visibility"
                                className="h-6 w-6 cursor-pointer"
                                onClick={togglePassword}
                            />
                        </div>
                    </div>

                    {/* Login Button */}
                    {/* <button
                        type="submit"
                        className="bg-[#B2BB32] text-[#143324] w-full rounded-3xl py-3 mt-3 font-medium"
                    >
                        Log In
                    </button> */}
                    <SubmitButton className="bg-[#B2BB32] text-[#143324] w-full rounded-3xl py-3 mt-3 font-medium" title={"log In"} />

                    {/* Remember Me & Forgot Password */}
                    <div className="flex justify-between items-center mt-6 text-xs flex-wrap gap-2">
                        <div className="flex items-center space-x-1 text-[#A9ADCC]">
                            <img className="h-4 w-4" src={checkbox} alt="" />
                            <p>Remember me</p>
                        </div>
                        <p className="underline text-white font-thin">Forgot password?</p>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center mt-6 space-x-2 text-sm text-white">
                        <hr className="flex-1" />
                        <span className="font-thin">or continue with</span>
                        <hr className="flex-1" />
                    </div>

                    {/* Google & Apple Buttons */}
                    <div className="flex flex-col mt-6 sm:flex-row gap-4 sm:justify-between">
                        <button className="flex items-center justify-center bg-none text-white py-2 rounded-3xl w-full sm:w-[48%] border border-gray-300 hover:bg-[#32BB78] hover:border-none">
                            <img src={google} alt="" className="h-5 w-5 mr-2" />
                            Google
                        </button>
                        <button className="flex items-center justify-center bg-[#0066CC] text-white py-2 rounded-full w-full sm:w-[48%] hover:bg-[#32BB78]">
                            <img src={apple} alt="" className="h-4 w-4 mr-2" />
                            Apple
                        </button>
                    </div>
                </form>
            </div>
        </div>



    )
}