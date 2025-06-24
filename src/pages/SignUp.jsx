// import {  Flex, Text, Button } from "@radix-ui/themes"
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { apiClient } from "../api/client";
import SubmitButton from "../components/SubmitButton";


import eye from "../assets/images/eye.png";
import google from "../assets/images/google.webp";
import apple from "../assets/images/apple.png";
import img1 from "../assets/images/newimage1.png";
import logo from "../assets/images/newlogo.png";
import { useState } from "react";

export default function SignUp() {
    const navigate = useNavigate();
    const signUpUser = async (data) => {
        try {
            const response = await apiClient.post("auth/signup", data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }


    }

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const togglePassword = () => setShowPassword((prev) => !prev);
    const toggleConfirm = () => setShowConfirm((prev) => !prev);


    return (
        <div className="h-screen overflow-x-hidden bg-[url('./assets/images/newimage1.png')] bg-center bg-cover">
            {/* Logo */}
            <div className="relative z-10 px-4 pt-4 mb-4 md:mb-0">
                <img src={logo} alt="Logo" className="w-32 md:w-40" />
            </div>

            {/* the Dark image */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* the contebts itsself */}
            <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 md:px-40">

                {/*the  Leftside Text Section */}
                <div className="text-white md:mt-15 text-center md:text-left">
                    <h3 className="text-3xl md:text-5xl mb-4 font-medium">
                        Already have an <br />Account?
                    </h3>
                    <button className="w-full sm:w-48 font-bold rounded-full p-2 mt-4 border hover:bg-[#32BB78] hover:border-none">
                        <Link to="/login">Login</Link>
                    </button>
                </div>

                {/* the right Form Section */}
                <form action={signUpUser} className="w-full max-w-[450px] md:mt-0 backdrop-blur-md bg-darkest-heading  border-white/30 rounded-xl shadow-xl p-6 text-white" onSubmit={signUpUser}>
                    <h3 className="text-3xl font-normal mb-2">Create an Account</h3>
                    <p className="mb-4">Join the Leading Marketplace for Agricultural Products</p>

                    {/* Name Inputs */}
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                            className="w-full md:w-1/2 bg-white text-black rounded p-3 border"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                            className="w-full md:w-1/2 bg-white text-black rounded p-3 border"
                        />
                    </div>

                    {/* Email & Password Inputs */}
                    <div className="flex flex-col gap-4">
                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            required
                            className="bg-white text-black rounded p-3 border w-full"
                        />

                        {/* Password with the eye gloria wants */}
                        <div className="flex items-center bg-white border text-black border-gray-300 rounded p-3 pr-6">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                required
                                maxLength={16}
                                minLength={8}
                                className="flex-1 text-black bg-transparent outline-none"
                            />
                            <img
                                src={eye}
                                alt="Toggle visibility"
                                className="h-6 w-6 cursor-pointer"
                                onClick={togglePassword}
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="flex items-center bg-white border text-black border-gray-300 rounded p-3 pr-6">
                            <input
                                type={showConfirm ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm Your Password"
                                required
                                maxLength={16}
                                minLength={8}
                                className="flex-1 bg-transparent outline-none"
                            />
                            <img
                                src={eye}
                                alt="Toggle visibility"
                                className="h-6 w-6 cursor-pointer"
                                onClick={toggleConfirm}
                            />
                        </div>
                        <div>
                             <label htmlFor="">Choose Your Role</label>
                            <select name="role" 
                             className="bg-white text-black rounded p-3 border w-full">
                                <option value ="user" >Buyer</option>
                                 <option value = "vendor" >Vendor</option>
                            </select>
                            {/* <svg class="pointer-events-none col-start-1 row-start-1 ...">
                            </svg> */}
                        </div>
                    </div>

                    {/* Submit */}
                    {/* <button
                        type="submit"
                        className="bg-[#B2BB32] text-[#143324] w-full rounded-3xl py-3 mt-3 font-medium"
                    >
                        Create Account
                    </button> */}
                    <SubmitButton className="bg-[#B2BB32] text-[#143324] w-full rounded-3xl py-3 mt-3 font-medium"
                        title={"Create Account"} />

                    {/* Divider */}
                    <div className="flex items-center space-x-2 text-sm text-white my-2">
                        <hr className="flex-1 border-gray-300" />
                        <span>or continue with</span>
                        <hr className="flex-1 border-gray-300" />
                    </div>

                    {/* Google & Apple Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
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