// src/components/ProductSearchBar.jsx
import React, { useRef, useState, useEffect } from "react";
import { Search, ListFilter, Tractor, Bean, Leaf, Drone, Sun, PiggyBank, MapPin, Award } from "lucide-react";
import Pomagranates from "../assets/images/pomagranates.png";
import Mayoka from "../assets/images/mayoka.png";
import Harvester from "../assets/images/harv.png";

export default function ProductSearchBar({
    onCategorySelect,      // Callback for category selection
    onLocationSelect,      // Callback for location selection
    onSearchTrigger,       // Callback for search input change/trigger
    onSortChange,          // Callback for sort order change (Top Ads)
    initialCategory,       // Initial category from parent
    initialLocation,       // Initial location from parent
    initialQuery,          // Initial search query from parent
    initialSortBy          // New prop: Initial sortBy from parent
}) {
    // State for the main search popup
    const [showSearchPopup, setShowSearchPopup] = useState(false);
    const searchPopupRef = useRef(null);
    // Initialize query from prop, fall back to empty string
    const [query, setQuery] = useState(initialQuery || '');

    // State for the category popup
    const [showCategoryPopup, setShowCategoryPopup] = useState(false);
    const categoryPopupRef = useRef(null);
    const categoryButtonRef = useRef(null);
    // Initialize selectedCategory from prop, fall back to null
    const [selectedCategory, setSelectedCategory] = useState(initialCategory || null);

    // State for the location popup
    const [showLocationPopup, setShowLocationPopup] = useState(false);
    const locationPopupRef = useRef(null);
    const locationButtonRef = useRef(null);
    // Initialize selectedLocation from prop, fall back to null
    const [selectedLocation, setSelectedLocation] = useState(initialLocation || null);

    // State for the top ads popup (sorting)
    const [showTopAdsPopup, setShowTopAdsPopup] = useState(false);
    const topAdsPopupRef = useRef(null);
    const topAdsButtonRef = useRef(null);
    // Initialize selectedTopAdFilter from prop
    const [selectedTopAdFilter, setSelectedTopAdFilter] = useState(initialSortBy || null);

    // Update internal state when parent props change (e.g., when a filter is cleared externally)
    useEffect(() => {
        setSelectedCategory(initialCategory || null);
    }, [initialCategory]);

    useEffect(() => {
        setSelectedLocation(initialLocation || null);
    }, [initialLocation]);

    useEffect(() => {
        setQuery(initialQuery || '');
        // When initialQuery changes (e.g., cleared by category selection), hide the popup
        if (initialQuery === '') {
            setShowSearchPopup(false);
        }
    }, [initialQuery]);

    useEffect(() => {
        setSelectedTopAdFilter(initialSortBy || null);
    }, [initialSortBy]);

    const handleInputChange = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);

        // Hide the search popup as soon as typing begins
        // This prevents the "Popular on EchoFarms" from showing while the user is typing
        if (newQuery.length > 0) {
            setShowSearchPopup(false);
        } else {
            // If the user clears the input, and the input still has focus,
            // you might want to show popular items again. Or keep it hidden.
            // For now, if cleared, keep it hidden.
             setShowSearchPopup(false);
        }

        // Trigger the parent's search handler immediately on input change
        // The parent (Products.jsx) will handle the debouncing.
        if (onSearchTrigger) {
            onSearchTrigger(newQuery);
        }
    }

    // Close all popups on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            // Close search popup if clicked outside AND it's not the search input itself
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
            image: Pomagranates,
            alt: "Pomegranate seeds",
        },
        {
            name: "Mayoka Lodia Seeds",
            price: "₵1,200 per pack",
            image: Mayoka,
            alt: "Mayoka Seeds Bag",
        },
        {
            name: "Harvester",
            price: "₵1,200 per hour",
            image: Harvester,
            alt: "Harvester",
        },
    ];

    // Data for categories, used in the category popup - NOW WITH ICONS!
    const categories = [
        { name: "Farm Machinery", icon: <Tractor className="w-4 h-4 mr-2 text-[#52B467]" /> },
        { name: "Crop Protection", icon: <Leaf className="w-4 h-4 mr-2 text-[#52B467]" /> },
        { name: "Seed & Planting Materials", icon: <Bean className="w-4 h-4 mr-2 text-[#52B467]" /> },
        { name: "Animal Husbandry Products", icon: <PiggyBank className="w-4 h-4 mr-2 text-[#52B467]" /> },
        { name: "Drones", icon: <Drone className="w-4 h-4 mr-2 text-[#52B467]" /> },
        { name: "Solar Energy", icon: <Sun className="w-4 h-4 mr-2 text-[#52B467]" /> },
    ];

    // Data for locations, used in the location popup
    const locations = [
        "Greater Accra", "Kumasi","Tema","Ashanti", "Volta", "Central", "Eastern", "Western", "Northern",
        "Upper East", "Upper West", "Bono", "Ahafo", "Western North", "Oti", "Savannah", "North East", "Bono East",
    ];

    // Data for top ads filters, used in the top ads popup (renamed to reflect sorting)
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

    // Handler for category selection
    const handleCategorySelectInternal = (categoryName) => {
        setSelectedCategory(categoryName);
        setShowCategoryPopup(false);
        if (onCategorySelect) { // Call the parent's callback
            onCategorySelect(categoryName);
        }
    };

    // Handler for location selection
    const handleLocationSelectInternal = (locationName) => {
        setSelectedLocation(locationName);
        setShowLocationPopup(false);
        if (onLocationSelect) {
            onLocationSelect(locationName);
        }
    };

    // Handler for top ad filter selection (sorting)
    const handleTopAdFilterSelectInternal = (filterName) => {
        setSelectedTopAdFilter(filterName);
        setShowTopAdsPopup(false);
        if (onSortChange) { // Use onSortChange prop
            onSortChange(filterName);
        }
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
                            // Only show search popup if the query is empty
                            if (query === '') {
                                setShowSearchPopup(true);
                            }
                        }}
                        value={query}
                        onChange={handleInputChange}
                        className="pl-14 pr-3 py-3 w-full rounded-full bg-white text-base border border-green-700 focus:outline-none focus:ring-1 focus:ring-gray-500 text-[#6B7280]"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent rounded-full flex items-center justify-center">
                        <Search className="w-5 h-5 text-green-700" />
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
                            {selectedLocation ? selectedLocation : "Location"} <MapPin className="h-[12px] w-[12px] ml-1" />
                        </button>
                        {showLocationPopup && (
                            <div
                                ref={locationPopupRef}
                                className="absolute z-50 mt-2 w-[240px] max-h-[300px] overflow-y-auto bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                                <ul>
                                    {/* Option to clear location filter */}
                                    <li
                                        className="px-4 py-2 text-sm text-[#35413B] hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleLocationSelectInternal(null)}>
                                        All Locations
                                    </li>
                                    {locations.map((location, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 text-sm text-[#35413B] hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleLocationSelectInternal(location)}>
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
                            {selectedCategory ? selectedCategory : "Category"} <ListFilter className=" h-[12px] w-[12px] ml-1" />
                        </button>
                        {showCategoryPopup && (
                            <div
                                ref={categoryPopupRef}
                                className="absolute z-50 mt-2 w-[240px] max-h-[300px] overflow-y-auto bg-white rounded-xl shadow-lg border border-gray-200 font-semibold py-2">
                                <ul>
                                    {/* Option to clear category filter */}
                                    <li
                                        className="px-4 py-2 text-sm text-[#35413B] hover:bg-gray-100 cursor-pointer flex items-center"
                                        onClick={() => handleCategorySelectInternal(null)} // Pass null to clear filter
                                    >
                                        All Categories
                                    </li>
                                    {categories.map((category) => (
                                        <li
                                            key={category.name}
                                            className="px-4 py-2 text-sm text-[#35413B] hover:bg-gray-100 cursor-pointer flex items-center"
                                            onClick={() => handleCategorySelectInternal(category.name)}
                                        >
                                            {category.icon}
                                            {category.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Top Ads Dropdown (Sorting) */}
                    <div className="relative">
                        <button
                            ref={topAdsButtonRef}
                            onClick={() => {
                                closeAllPopups(); // Close others
                                setShowTopAdsPopup(!showTopAdsPopup);
                            }}
                            className="text-sm bg-white hover:bg-gray-300 rounded-xl px-3 py-2 flex items-center border border-gray-300 text-[#35413B]"
                        >
                            {selectedTopAdFilter ? selectedTopAdFilter : "Top Ads"} <Award className=" h-[12px] w-[12px] ml-1" />
                        </button>
                        {showTopAdsPopup && (
                            <div
                                ref={topAdsPopupRef}
                                className="absolute z-50 mt-2 w-[240px] max-h-[300px] overflow-y-auto bg-white rounded-xl shadow-lg border border-gray-200 py-2"
                            >
                                <ul>
                                    {/* Option to clear sorting filter */}
                                    <li
                                        className="px-4 py-2 text-sm text-[#35413B] hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleTopAdFilterSelectInternal(null)}>
                                        Default Sort
                                    </li>
                                    {topAdsFilters.map((filter, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 text-sm text-[#35413B] hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleTopAdFilterSelectInternal(filter)}>
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