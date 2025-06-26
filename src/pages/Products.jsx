// src/pages/Products.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import ProductNavBar from "@/components/ProductNavbar";
import ProductSearchBar from "@/components/ProductSearch";
import ProductCard from "@/components/ProductCard";
import droneImage from '../assets/images/drone.jpg';
import Harvester from '../assets/images/harv.png';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentFilters, setCurrentFilters] = useState({
        category: null,
        location: null,
        query: '', // Initialize as empty string for search
        sortBy: null,
    });

    // Ref for the debounce timer
    const debounceTimerRef = useRef(null);

    const API_BASE_URL = "https://echo-farms-api.onrender.com/api/v1";

    const fetchProducts = useCallback(async (filters) => {
        setLoading(true);
        setError(null);

        let url = `${API_BASE_URL}/adverts?`;
        const params = new URLSearchParams();

        // Dynamically add search parameter for combined field filtering
        // The backend API should be configured to search 'query' across title, description, etc.
        if (filters.query && filters.query.trim() !== '') {
            params.append('search', filters.query.trim()); // Use 'search' for general query
        }
        if (filters.category) {
            params.append('category', filters.category);
        }
        if (filters.location) {
            params.append('location', filters.location);
        }
        if (filters.sortBy) {
            let apiSortParam = null;
            switch (filters.sortBy) {
                case "Most Recent":
                    apiSortParam = "date_added:desc";
                    break;
                case "Price: Low to High":
                    apiSortParam = "price:asc";
                    break;
                case "Price: High to Low":
                    apiSortParam = "price:desc";
                    break;
                case "Most Viewed":
                    apiSortParam = "views:desc";
                    break;
                default:
                    console.warn(`Unhandled sortBy filter: ${filters.sortBy}`);
            }
            if (apiSortParam) {
                params.append('sort_by', apiSortParam);
            }
        }

        url += params.toString();
        console.log("Fetching products with URL:", url);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP error! status: ${response.status} - ${errorData.message || response.statusText}`);
            }
            const data = await response.json();

            if (Array.isArray(data)) {
                const formattedProducts = data.map(ad => ({
                    id: ad.id,
                    productTitle: ad.productTitle,
                    description: ad.description,
                    location: ad.location,
                    price: ad.price,
                    images: ad.images,
                    category: ad.category,
                    rating: ad.rating || 0,
                }));
                setProducts(formattedProducts);
            } else {
                console.warn("API response is not an array as expected:", data);
                setProducts([]);
            }
        } catch (err) {
            console.error("Failed to fetch products:", err);
            setError(`Failed to load products: ${err.message}`);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    }, [API_BASE_URL]);

    // Effect to trigger product fetch whenever currentFilters change
    // This useEffect will now manage *all* filter changes, including query.
    // The debounce will specifically handle the 'query' part.
    useEffect(() => {
        // Clear previous debounce timer if it exists
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }

        // Apply debounce only for query changes, other filter changes can be immediate
        if (currentFilters.query !== undefined && currentFilters.query !== null) { // Check if query is explicitly being set
            debounceTimerRef.current = setTimeout(() => {
                fetchProducts(currentFilters);
            }, 500); // Debounce for 500ms
        } else {
            // For category, location, sortBy changes, fetch immediately
            fetchProducts(currentFilters);
        }

        // Cleanup function for useEffect
        return () => {
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }
        };
    }, [currentFilters, fetchProducts]);


    // Handlers to be passed down to ProductSearchBar
    const handleCategoryFilter = useCallback((category) => {
        setCurrentFilters(prevFilters => ({
            ...prevFilters,
            category: category,
            // When a category is selected, we want to clear the general search query
            // and potentially location/sort to narrow down the context.
            // Adjust this logic based on desired UX (e.g., allow category + query)
            query: '', // Clear query
            location: null, // Clear location
            sortBy: null, // Clear sort
        }));
    }, []);

    const handleLocationFilter = useCallback((location) => {
        setCurrentFilters(prevFilters => ({
            ...prevFilters,
            location: location,
            // When a location is selected, clear query and category for focused search
            query: '', // Clear query
            category: null, // Clear category
            sortBy: null, // Clear sort
        }));
    }, []);

    const handleSearchTrigger = useCallback((searchQuery) => {
        // Update the query in currentFilters. The useEffect will then handle the debounced fetch.
        setCurrentFilters(prevFilters => ({
            ...prevFilters,
            query: searchQuery,
            // When a search is performed, it often implies a new, broad search.
            // Clear other specific filters like category and location unless you
            // intend for the search query to refine existing category/location filters.
            category: null,
            location: null,
            sortBy: null, // Reset sorting when a new search query is entered
        }));
    }, []);

    const handleSortChange = useCallback((sortByValue) => {
        setCurrentFilters(prevFilters => ({
            ...prevFilters,
            sortBy: sortByValue,
            // Keep category, location, query if you want sorting applied ON TOP of existing filters
            // Or clear them if sorting is meant to be an independent filter action
            // For typical UX, sorting *refines* existing filters, so we keep others.
            // category: prevFilters.category,
            // location: prevFilters.location,
            // query: prevFilters.query,
        }));
    }, []);


    return (
        <div className="relative bg-[#F5FAF8] min-h-screen px-4 py-8">
            <ProductNavBar />

            {/* Banner Section */}
            <div className="max-w-6xl w-[90%] mx-auto relative bg-cover bg-no-repeat rounded-xl overflow-hidden text-white flex items-center justify-between p-8 mt-[45px] mb-[45px] h-[60%]]"
                style={{ backgroundImage: `url(${droneImage})` }}>
                <div className="space-y-4 z-10">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                        Smart Agricultural Spraying <br /> Drone – 16L Tank Capacity
                    </h2>
                    <p className="text-xs leading-relaxed max-w-md mt-15">
                        Precision drone for crop spraying and watering. Covers large fields quickly,
                        reduces chemical waste, and improves efficiency with GPS control and real-time flight feedback.
                    </p>
                    <button className="bg-[#d4f044] text-black font-semibold px-10 py-4 mt-25 rounded-full hover:bg-lime-400">
                        Buy Now
                    </button>
                </div>

                <div className="absolute top-6 right-6">
                    <span className="border border-white rounded-full px-4 py-1 text-sm">🔥Top Ad</span>
                </div>

                <div className="absolute right-6 bottom-6 flex space-x-2">
                    <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-300">‹</button>
                    <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-300">›</button>
                </div>
            </div>

            {/* Pass handlers and initial values to ProductSearchBar */}
            <ProductSearchBar
                onCategorySelect={handleCategoryFilter}
                onLocationSelect={handleLocationFilter}
                onSearchTrigger={handleSearchTrigger}
                onSortChange={handleSortChange}
                initialCategory={currentFilters.category}
                initialLocation={currentFilters.location}
                initialQuery={currentFilters.query}
                // initialSortBy={currentFilters.sortBy} // You might add this if ProductSearchBar needs to reflect the sort selection
            />

            <div className="w-[90%] mx-auto mt-8">
                <h2 className="text-2xl font-bold text-[#35413B] mb-4">
                    {currentFilters.category ? `Category: ${currentFilters.category}` :
                        currentFilters.location ? `Location: ${currentFilters.location}` :
                            currentFilters.query && currentFilters.query.trim() !== '' ? `Search Results for "${currentFilters.query}"` :
                                "All Products"}
                    {currentFilters.sortBy && ` (Sorted by: ${currentFilters.sortBy})`}
                </h2>

                {loading && <p className="text-center text-gray-500">Loading products...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                {!loading && !error && products.length === 0 && (
                    <p className="text-center text-gray-500">No products found matching your criteria.</p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>

            <div className="flex justify-center items-center mt-25">
                <img
                    src={Harvester}
                    alt="Harvester"
                    className="w-[90%] h-[85%] object-cover rounded-t-1xl"
                />
            </div>
        </div>
    );
}