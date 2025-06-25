import SubmitButton from "@/components/SubmitButton";
import { apiClient } from "@/api/client";
import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

export default function AdvertsForm() {
  const postPostAdverts = async (data) => {
    try {
      const response = await apiClient.post("/adverts", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
        },
      });
      console.log(response.data);
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
    <form
      action={postPostAdverts}
      className="bg-white max-w-lg mx-auto p-6 rounded-lg shadow-lg space-y-5 font-roboto"
    >
      <h2 className="text-xl font-semibold text-green-700">Upload an Ad</h2>
      <p className="text-sm text-gray-500">Provide the fields below to upload an ad</p>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Product Title <span className="text-red-500">*</span>
        </label>
        <input
          name="productTitle"
          type="text"
          placeholder="Enter product title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          placeholder="Give a brief description about the product"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400"
          rows={4}
          required
        />
      </div>

        <div className="w-full max-w-md">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select Category <span className="text-red-500">*</span>
      </label>
      
      <div className="relative">
        {/* Selected items display */}
        <div 
          className="min-h-10 w-full bg-white border border-gray-200 rounded-md px-3 py-2 cursor-pointer flex flex-wrap gap-2 items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedItems.map(item => (
            <span 
              key={item}
              className="inline-flex items-center gap-1 bg-green-50 text-green-600 text-xs px-3 py-1 rounded-full border border-green-200"
            >
              {item}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeItem(item);
                }}
                className="hover:bg-green-100 rounded-full p-0.5"
              >
                <X size={12} />
              </button>
            </span>
          ))}
          
          {selectedItems.length === 0 && (
            <span className="text-gray-400 text-xs">Select categories...</span>
          )}
          
          <ChevronDown 
            size={16} 
            className={`ml-auto text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            {options.map(option => (
              <div
                key={option}
                className={`px-3 py-2 text-xs cursor-pointer hover:bg-gray-50 flex items-center justify-between ${
                  selectedItems.includes(option) ? 'bg-green-50 text-green-600' : 'text-gray-700'
                }`}
                onClick={() => toggleOption(option)}
              >
                <span>{option}</span>
                {selectedItems.includes(option) && (
                  <div className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                    <div className="w-2 h-1 bg-white rounded-sm"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Select Location <span className="text-red-500">*</span>
          </label>
          <select
            name="location"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring focus:border-green-400"
          >

            <option>Greater Accra, Tema</option>
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
          <label className="text-sm font-medium text-gray-700">
            Product Price <span className="text-red-500">*</span>
          </label>
          <input
            name="price"
            type="number"
            placeholder="Ghc 0.00"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400"
            required
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
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
        <label className="text-sm font-medium text-gray-700">
          Add Photos <span className="text-red-500">*</span>
        </label>
        <p className="text-sm text-gray-500">Add a maximum of three photos</p>
        <input
          name="images"
          type="file"
          multiple
          accept="image/*,video/*"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring focus:border-green-400"
        />
      </div>

      <div className="pt-4">
        <SubmitButton
          title={"Post Ad"}
          className="w-full py-2 rounded-md text-white bg-green-700 hover:bg-green-800"
        />
      </div>
    </form>
  );
}
