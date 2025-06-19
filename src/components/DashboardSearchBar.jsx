import React, {useState} from "react";
import { Search } from "lucide-react";

export default function DashboardSearchBar(){
    const [query, setQuery] = useState('');
    const handleInputChange = (event) =>{
        const newQuery = event.target.value;
        setQuery(newQuery);
        onSearch(newQuery); //pass query to parent component
    }

    return(
        // <input
        // type="text"
        // placeholder="search dashbaord"
        // value={query}
        // onChange={handleInputChange}
        // />
          <div className="flex bg-backgrounds border border-light-border px-2 md:px-6 py-2 gap-2 rounded-full max-w-xs md:max-w-lg focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-sky-700">
    <div className=" w-4 md:w-8 h-4 md:h-8 bg-primary text-white flex justify-center items-center rounded-full">
        <Search className=" w-2 md:w-4 h-2 md:h-4" />
    </div>
    <input
        type="text"
        placeholder="search dashboard .."
        value={query}
        onChange={handleInputChange}
        className="outline-none text-sm flex-1"
    /> 
</div>
    );
};