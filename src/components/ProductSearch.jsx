import React, { useRef, useState, useEffect } from "react";
// Import individual Lucide icons needed for category list and the filter icon for dropdown buttons
import {Search, ListFilter,Tractor,Bean,Leaf,FlaskConical, Wheat,PiggyBank, Fish, Bird, Sprout, HardHat, Hammer, Box,MapPin,Award} from "lucide-react";

// Import your local images
import Pomagranates from "../assets/images/pomagranates.png";
import Mayoka from "../assets/images/mayoka.png";
import Harvester from "../assets/images/harv.png";

export default function ProductSearchBar() {
    // State for the main search popup
    const [showSearchPopup, setShowSearchPopup] = useState(false);
    const searchPopupRef = useRef(null);
    const [query, setQuery] = useState('');

    // State for the category popup
    const [showCategoryPopup, setShowCategoryPopup] = useState(false);
    const categoryPopupRef = useRef(null);
    const categoryButtonRef = useRef(null);

    // State for the location popup
    const [showLocationPopup, setShowLocationPopup] = useState(false);
    const locationPopupRef = useRef(null);
    const locationButtonRef = useRef(null);

    // State for the top ads popup
    const [showTopAdsPopup, setShowTopAdsPopup] = useState(false);
    const topAdsPopupRef = useRef(null);
    const topAdsButtonRef = useRef(null);

    // Placeholder for onSearch function, replace with actual implementation if needed
    const onSearch = (value) => {
        console.log("Searching for:", value);
        // Implement your search logic here
    };

    const handleInputChange = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        // onSearch(newQuery); // Uncomment if onSearch is intended to filter content in the popup
    }

    // Close all popups on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            // Close search popup if clicked outside
            if (searchPopupRef.current && !searchPopupRef.current.contains(e.target) && !e.target.closest('.search-input-container')) {
                setShowSearchPopup(false);
            }
            // Close category popup if clicked outside
            if (categoryPopupRef.current && !categoryPopupRef.current.contains(e.target) && categoryButtonRef.current && !categoryButtonRef.current.contains(e.target)) {
                setShowCategoryPopup(false);
            }
            // Close location popup if clicked outside
            if (locationPopupRef.current && !locationPopupRef.current.contains(e.target) && locationButtonRef.current && !locationButtonRef.current.contains(e.target)) {
                setShowLocationPopup(false);
            }
            // Close top ads popup if clicked outside
            if (topAdsPopupRef.current && !topAdsPopupRef.current.contains(e.target) && topAdsButtonRef.current && !topAdsButtonRef.current.contains(e.target)) {
                setShowTopAdsPopup(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Data for popular items, used in the search popup
    const popularItems = [
        {
            name: "Pomagranates Seeds ",
            price: "₵2,200 per pack",
            image: Pomagranates, // Correct: direct reference to imported image
            alt: "Pomegranate seeds",
        },
        {
            name: "Mayoka Lodia Seeds",
            price: "₵1,200 per pack",
            image: Mayoka, // Correct: direct reference to imported image
            alt: "Mayoka Seeds Bag",
        },
        {
            name: "Harvester",
            price: "₵1,200 per hour",
            image: Harvester, // Correct: direct reference to imported image
            alt: "Harvester",
        },
    ];

    // Data for categories, used in the category popup - NOW WITH ICONS!
    const categories = [
        { name: "Farm Machinery", icon: <Tractor className="w-4 h-4 mr-2 text-gray-500" /> },
        { name: "Seeds & Seedlings", icon: <Bean className="w-4 h-4 mr-2 text-gray-500" /> },
        { name: "Fertilizers", icon: <Leaf className="w-4 h-4 mr-2 text-gray-500" /> },
        { name: "Pesticides", icon: <FlaskConical className="w-4 h-4 mr-2 text-gray-500" /> },
        { name: "Animal Feed", icon: <Wheat className="w-4 h-4 mr-2 text-gray-500" /> },
        { name: "Livestock", icon: <PiggyBank className="w-4 h-4 mr-2 text-gray-500" /> },
        { name: "Fishery", icon: <Fish className="w-4 h-4 mr-2 text-gray-500" /> },
        { name: "Poultry", icon: <Bird className="w-4 h-4 mr-2 text-gray-500" /> },
        { name: "Irrigation Systems", icon: <Sprout className="w-4 h-4 mr-2 text-gray-500" /> },
        { name: "Protective Gear", icon: <HardHat className="w-4 h-4 mr-2 text-gray-500" /> },
        { name: "Harvesting Tools", icon: <Hammer className="w-4 h-4 mr-2 text-gray-500" /> }, // Reusing Hammer for now
        { name: "Other Farm Products", icon: <Box className="w-4 h-4 mr-2 text-gray-500" /> },
    ];

    // Data for locations, used in the location popup
    const locations = [
        "Greater Accra",
        "Ashanti",
        "Volta",
        "Central",
        "Eastern",
        "Western",
        "Northern",
        "Upper East",
        "Upper West",
        "Bono",
        "Ahafo",
        "Western North",
        "Oti",
        "Savannah",
        "North East",
        "Bono East",
    ];

    // Data for top ads filters, used in the top ads popup
    const topAdsFilters = [
        "Most Recent",
        "Price: Low to High",
        "Price: High to Low",
        "Most Viewed",
    ];


    // Function to close all popups except the one being opened/focused
    const closeAllPopups = () => {
        setShowSearchPopup(false);
        setShowCategoryPopup(false);
        setShowLocationPopup(false);
        setShowTopAdsPopup(false);
    };

    return (
        <div className="relative">
            {/* Filter Bar */}
            <div className="w-[90%] mx-auto p-3 flex flex-col sm:flex-row items-center justify-between gap-3 mt-6">
                <span className="font-medium text-sm text-[#35413B] whitespace-nowrap">All Ads</span>

                {/* Search Input and Icon */}
                <div className="relative flex-grow mx-4 max-w-[688px] search-input-container">
                    <input
                        type="text"
                        placeholder="Search products..."
                        onFocus={() => {
                            closeAllPopups(); // Close others
                            setShowSearchPopup(true);
                        }}
                        value={query}
                        onChange={handleInputChange}
                        className="pl-14 pr-3 py-3 w-full rounded-full bg-white text-base border border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 text-[#6B7280]"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent rounded-full flex items-center justify-center">
                        <Search className="w-5 h-5 text-gray-500" />
                    </div>
                </div>

                {/* Dropdowns */}
                <div className="flex gap-2 whitespace-nowrap">
                    {/* Location Dropdown */}
                    <div className="relative">
                        <button
                            ref={locationButtonRef}
                            onClick={() => {
                                closeAllPopups(); // Close others
                                setShowLocationPopup(!showLocationPopup);
                            }}
                            className="text-sm bg-white hover:bg-gray-300 rounded-xl px-3 py-2 flex items-center border border-gray-300 text-[#35413B]">
                            Location <MapPin className="h-[12px] w-[12px] ml-1" /> {/* Using MapPin for location */}
                        </button>
                        {showLocationPopup && (
                            <div
                                ref={locationPopupRef}
                                className="absolute z-50 mt-2 w-[240px] max-h-[300px] overflow-y-auto bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                                <ul>
                                    {locations.map((location, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 text-sm text-[#35413B] hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                console.log("Selected location:", location);
                                                setShowLocationPopup(false);
                                                // Implement location filtering logic here
                                            }}>
                                            {location}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Category Dropdown */}
                    <div className="relative">
                        <button
                            ref={categoryButtonRef}
                            onClick={() => {
                                closeAllPopups(); // Close others
                                setShowCategoryPopup(!showCategoryPopup);
                            }}
                            className="text-sm bg-white hover:bg-gray-300 rounded-xl px-3 py-2 flex items-center border border-gray-300 text-[#35413B]"
                        >
                            Category <ListFilter className=" h-[12px] w-[12px] ml-1" /> {/* Using ListFilter for category */}
                        </button>
                        {showCategoryPopup && (
                            <div
                                ref={categoryPopupRef}
                                className="absolute z-50 mt-2 w-[240px] max-h-[300px] overflow-y-auto bg-white rounded-xl shadow-lg border border-gray-200 font-semibold py-2">

                                <ul>
                                    {categories.map((category, index) => (
                                        <li
                                            key={category.name} // Use category.name as key for better uniqueness
                                            className="px-4 py-2 text-sm text-[#35413B] hover:bg-gray-100 cursor-pointer flex items-center" // Added flex and items-center
                                            onClick={() => {
                                                console.log("Selected category:", category.name); // Access category.name
                                                setShowCategoryPopup(false);
                                                // Implement category filtering logic here
                                            }}
                                        >
                                            {category.icon} {/* Render the icon */}
                                            {category.name} {/* Render the category name */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Top Ads Dropdown */}
                    <div className="relative">
                        <button
                            ref={topAdsButtonRef}
                            onClick={() => {
                                closeAllPopups(); // Close others
                                setShowTopAdsPopup(!showTopAdsPopup);
                            }}
                            className="text-sm bg-white hover:bg-gray-300 rounded-xl px-3 py-2 flex items-center border border-gray-300 text-[#35413B]"
                        >
                            Top Ads <Award className=" h-[12px] w-[12px] ml-1" /> {/* Using Award for top ads */}
                        </button>
                        {showTopAdsPopup && (
                            <div
                                ref={topAdsPopupRef}
                                className="absolute z-50 mt-2 w-[240px] max-h-[300px] overflow-y-auto bg-white rounded-xl shadow-lg border border-gray-200 py-2"
                            >
                                <ul>
                                    {topAdsFilters.map((filter, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 text-sm text-[#35413B] hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                console.log("Selected filter:", filter);
                                                setShowTopAdsPopup(false);
                                                // Implement top ads filtering logic here
                                            }}
                                        >
                                            {filter}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Search Popup - Positioned absolutely under the search bar */}
            {showSearchPopup && (
                <div
                    ref={searchPopupRef}
                    className="absolute z-50 left-1/2 -translate-x-1/2 mt-4 p-6 bg-white rounded-xl shadow-xl w-[calc(90%-24px)] md:w-[688px] border border-gray-200"
                >
                    <p className="text-[#35413B] text-xl font-medium mb-4">Popular on EchoFarms</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
                        {popularItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl flex items-center text-left hover:shadow-md transition-shadow duration-200 cursor-pointer"
                            >
                                <div className="flex items-center bg-[#F8F9FA] p-2 rounded-[8px] gap-3 w-full h-[100px]">
                                    <div className="w-[120px] h-full rounded-[6px] overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.alt}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-base font-medium text-[#35413B]">{item.name}</p>
                                        <p className="text-sm text-[#4B5563]">{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}