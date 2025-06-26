import SubmitButton from "@/components/SubmitButton";
import { apiClient } from "@/api/client";
import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import AdHero from "@/components/custom/AdHero";
import "@/styles/styles.css"
import { useNavigate } from "react-router";

export default function  AdForm() {
  const navigate = useNavigate();
  const postPostAdverts = async (data) => {
    try {
      const response = await apiClient.post("/adverts", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
        },
      });
      console.log(response.data);
      navigate("/dashboard/manage-ads")
    } catch (error) {
      console.log(error);
    }
  };

  

   const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(['Crop Protection', 'Seeds & Planting Materials']);
  
  const options = [
    'Farm Machinery',
    'Crop Protection', 
    'Seeds & Planting Materials',
    'Animal Husbandry Products',
    'Drones',
    'Solar Energy'
  ];
  const toggleOption = (option) => {
    setSelectedItems(prev => 
      prev.includes(option) 
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const removeItem = (item) => {
    setSelectedItems(prev => prev.filter(selected => selected !== item));
  };

  return (
    <div className="flex flex-col gap-22">
      <div className="flex justify-center items-center">
        <AdHero/>
      </div>
    <form
      action={postPostAdverts}
      className="bg-darkest-heading max-w-2xl mx-auto  p-6 rounded-lg shadow-lg space-y-5 font-roboto"
    >
      <h2 className="text-2xl font-semibold text-white">Upload an Ad</h2>
      <p className="text-lg text-white/80">Provide the fields below to upload an ad</p>

      <div className="space-y-1">
        <label className="text-lg font-medium text-white/80">
          Product Title <span className="text-red-500">*</span>
        </label>
        <input
          name="productTitle"
          type="text"
          placeholder="Enter product title"
          className="w-full px-4 py-2 border text-white border-gray-200 rounded-md focus:outline-none focus:ring focus:border-green-400"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="text-lg font-medium text-white/80">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          placeholder="Give a brief description about the product"
          className="w-full text-white px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:border-green-400"
          rows={4}
          required
        />
      </div>

        <div className="w-full max-w-md">
      <label className="block text-lg font-medium text-white/80 mb-2">
        Select Category <span className="text-red-500">*</span>
      </label>
     <select name="category" multiple className="w-full text-white border-light-border border px-4 py-3 rounded-md">
      <option>Solar Energy</option>
      <option>Farm Machinery</option>
      <option>Crop Protection</option>
      <option>Seeds & Planting Materials</option>
      <option>Animal Husbandry Products</option>
      <option>Seeds & Planting Materials</option>
      <option>Drones</option>
      </select>
    </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-white/80">
            Select Location <span className="text-red-500">*</span>
          </label>
          <select
            name="location"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring focus:border-green-400"
          >
            <option className="text-white">Greater Accra, Tema</option>
            <option>Ashanti, Kumasi</option>
            <option>Western, Takoradi</option>
            <option>Eastern, Koforidua</option>
            <option>Central, Cape Coast</option>
            <option>Volta, Ho</option>
            <option>Northern, Tamale</option>
            <option>Upper East, Bolgatanga</option>
            <option>Upper West, Wa</option>
            <option>Bono, Sunyani</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-lg font-medium text-white/80">
            Product Price <span className="text-red-500">*</span>
          </label>
          <input
            name="price"
            type="number"
            placeholder="Ghc 0.00"
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400 placeholder-white"
            required
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-lg font-medium text-white/80">
          Choose Plan <span className="text-red-500">*</span>
        </label>
        <select
          name="plan"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring focus:border-green-400"
        >
          <option value="Basic">Basic</option>
          <option value="Free Trial">Free Trial</option>
          <option value="Enterprise">Enterprise</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-lg font-medium text-white">
          Add Photos <span className="text-red-500">*</span>
        </label>
        <p className="text-sm text-white/80">Add a maximum of three photos</p>
        <input
          name="images"
          type="file"
          multiple
          accept="image/*,video/*"
          className="w-full h-[100px] px-3 py-2 border  border-gray-300 rounded-md text-sm bg-backgrounds focus:outline-none focus:ring focus:border-green-400"
        />
      </div>

      <div className="pt-4">
        <SubmitButton
          title={"Post Ad"}
          className="w-full py-2 rounded-md text-black bg-yellow-button hover:bg-primary-color"
        />
      </div>
    </form>
    </div>
  );
}

