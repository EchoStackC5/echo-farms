import signUpLogo from "../assets/signUp-logo.svg"
import { useState } from "react";

export default function Trials() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
 
    return (
        <div className="min-h-screen bg-[url('./assets/signUpImage.jpg')] bg-center bg-cover relative">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            {/* Logo */}
            <div className="relative z-10 p-4">
                <img src={signUpLogo} alt="Logo" className="h-12" />
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-8 lg:px-40 pb-8">

                {/* Left Text Section */}
                <div className="text-white text-center lg:text-left mt-8 lg:mt-0">
                    <h3 className="text-3xl lg:text-4xl font-medium">Already have an <br />Account?</h3>
                    <button className="border w-full border-gray-50 rounded-3xl px-6 py-3 mt-4 hover:bg-[#143324] hover:border-none transition-colors">
                        <a href="">Login</a>
                    </button>
                </div>

                {/* Right Form Section */}
                <div className="w-full max-w- lg:max-w-lg">
                    <form className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-xl p-6 text-white">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-2">Create an Account</h3>
                        <p className="mb-4 text-sm lg:text-base">Join the Leading Marketplace for Agricultural Products</p>

                        {/* Name Inputs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-4">
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                required 
                                className="flex-1 bg-white text-black rounded p-3 border outline-none focus:ring-2 focus:ring-[#B2BB32]" 
                            />
                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                required 
                                className="flex-1 bg-white text-black rounded p-3 border outline-none focus:ring-2 focus:ring-[#B2BB32]" 
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            {/* Email */}
                            <input 
                                type="email" 
                                placeholder="Enter Your Email" 
                                required 
                                className="w-full bg-white text-black rounded p-3 border outline-none focus:ring-2 focus:ring-[#B2BB32]" 
                            />
                            
                            {/* Password inputs */}
                            <div className="flex items-center bg-white border border-gray-300 rounded p-3">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
                                    required
                                    className="flex-1 text-black bg-transparent outline-none"
                                />
                            </div>
                            
                            <div className="flex items-center bg-white border border-gray-300 rounded p-3">
                                <input
                                    type={showConfirm ? "text" : "password"}
                                    name="confirmPassword" 
                                    placeholder="Confirm Your Password"
                                    required
                                    className="flex-1 text-black bg-transparent outline-none"
                                />
                            </div>
                        </div>

                        {/* Submit button */}
                        <button 
                            type="submit" 
                            className="bg-[#B2BB32] text-[#001008] w-full rounded-3xl py-3 text-lg font-medium mt-4 hover:bg-[#9da82b] transition-colors"
                        >
                            Create Account
                        </button>

                        {/* Divider */}
                        <div className="flex items-center space-x-2 text-sm text-white my-4">
                            <hr className="flex-1 border-gray-300" />
                            <span>or continue with</span>
                            <hr className="flex-1 border-gray-300" />
                        </div>

                        {/* Social buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button 
                                type="button"
                                className="flex items-center justify-center bg-transparent text-white py-2 px-4 rounded-3xl flex-1 border border-gray-300 hover:bg-[#143324] hover:border-none transition-colors"
                            >
                                Google
                            </button>
                            <button 
                                type="button"
                                className="flex items-center justify-center bg-transparent border border-gray-300 text-white py-2 px-4 rounded-full flex-1 hover:bg-[#143324] hover:border-none transition-colors"
                            >
                                Apple
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}