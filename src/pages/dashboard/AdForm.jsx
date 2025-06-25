import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { categoryOptions } from '@/components/CategoryOption';
import Select from 'react-select';
import RegionSelect from '@/components/LocationData';
import { plans } from '@/components/Plans';
import SubmitButton from '@/components/SubmitButton';
import { apiClient } from '@/api/client';
import { useNavigate } from 'react-router';
export default function AdForm(){
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
  
      const postPostAdverts = async (data) => {
        try {
            const response = await apiClient.post("/adverts", data, {
                 headers: {
                    Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
                }
              
            })
            console.log(response.data);
                
        } catch (error) {
            console.log(error);
            
        }

        
    }
    return(
        <form action={postPostAdverts}  className="flex flex-col">
                    <input name="productTitle" type="text" placeholder="product title" className="border-gray-400 px-5 py-5"/>
                    <input name="description" type="text" placeholder="product description" className="border-gray-400 px-5 py-5"/>
                
                         <select multiple name="category" className="h-10 w-165 bg-white text-xs rounded-md px-2">
                                        <option >Farm Machinery</option>
                                        <option >Crop Protection</option>
                                        <option >Seeds & Planting Materials</option>
                                        <option >Animal Husbandry Products</option>
                                         <option>Drones</option>
                                          <option >Solar Energy</option>
        
                         </select>
                         <select  name="location" className="h-10 w-165 bg-white text-xs rounded-md px-2">
                                        <option value="farm"> Accra</option>
                                        <option value="cropProtection"> Kumasi</option>
                                        <option value="science-fair"> Ho</option>
                                        <option value="business"> Tema</option>
                         </select>
                    
                     <input name="price" type="number" placeholder="enter price" className="border-gray-400 px-5 py-5"/>
                      <select  name="plan" className="h-10 w-165 bg-white text-xs rounded-md px-2">
                                        <option value="Basic">Basic</option>
                                        <option value="Free Trial"> Free Trial</option>
                                        <option value="Enterprise" > Enterprise</option>
                                         
                         </select>
                         <input name="images" type="file" multiple placeholder="uplaod products"/>
                         <SubmitButton title={"Post Ad"} className=" px-3 py-2 rounded-md text-white bg-primary-color hover:bg-green-800" />
                </form> 
    )
}
