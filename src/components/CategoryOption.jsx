import React from 'react';
// import Select from 'react-select';
import Select from 'react-select';
export const categoryOptions = [
    { value: 'FarmMachinery', label: 'Farm Machinery' },
    { value: 'CropProtection', label: 'Crop Protection' },
    { value: 'PlantingMaterials', label: 'Seeds & Planting Materials' },
    { value: 'Animal', label: 'Animal Husbandry Products' },
    { value: 'Drones', label: 'Drones' },
    { value: 'SolarEnergy', label: 'Solar Energy' },
   
];

export default function CategoryOptions(){
    
    return(
       <Select             
            options={categoryOptions}
            isMulti  
            name='category'           
            placeholder="Select Category"             
            className="basic-multi-select outline-none border text-secondary-text bg-backgrounds border-dark-border p-2 rounded-md"             
            classNamePrefix="select"         
        />
    );

}