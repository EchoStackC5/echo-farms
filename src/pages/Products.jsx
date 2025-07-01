// src/pages/Products.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router'; // Import useNavigate
import ProductsNav from '@/components/custom/ProductsNav';
import ProductSearchBar from "@/components/ProductSearch";
import ProductCard from "@/components/ProductCard";
import droneImage from '../assets/images/drone.jpg';
import ProductHero from '@/components/custom/ProductHero';
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

    const navigate = useNavigate(); // Initialize useNavigate

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
        // We compare the query from currentFilters to a previous query if we had one
        // to specifically debounce only query changes, not other filter changes.
        const prevQuery = currentFilters.query; // Assuming currentFilters.query is the latest query
        // If the filter change is primarily a query change, debounce
        if (currentFilters.query !== undefined && currentFilters.query !== null) {
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
            // When a category is selected, we clear other filters for a fresh context
            query: '', // Clear query
            location: null, // Clear location
            sortBy: null, // Clear sort
        }));
    }, []);

    const handleLocationFilter = useCallback((location) => {
        setCurrentFilters(prevFilters => ({
            ...prevFilters,
            location: location,
            // When a location is selected, clear other filters
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
            // For typical UX, sorting *refines* existing filters, so we keep others.
        }));
    }, []);

    // Handler for clicking a product card
    const handleProductClick = useCallback((productId) => {
        navigate(`/product-details?id=${productId}`);
    }, [navigate]);

    return (
        <div className="relative bg-[#F5FAF8]">
            <ProductsNav />

            <ProductHero/>

            {/* Pass handlers and initial values to ProductSearchBar */}
            <ProductSearchBar
                onCategorySelect={handleCategoryFilter}
                onLocationSelect={handleLocationFilter}
                onSearchTrigger={handleSearchTrigger}
                onSortChange={handleSortChange}
                initialCategory={currentFilters.category}
                initialLocation={currentFilters.location}
                initialQuery={currentFilters.query}
                initialSortBy={currentFilters.sortBy} // Pass sortBy to reflect in the search bar
            />

            <div className="w-[90%] mx-auto mt-8">
                <h2 className="text-2xl font-bold text-[#35413B] mb-4">
                    {currentFilters.category ? `Category: ${currentFilters.category}` :
                        currentFilters.location ? `Location: ${currentFilters.location}` :
                            currentFilters.query && currentFilters.query.trim() !== '' ? `Search Results for "${currentFilters.query}"` :
                                ""}
                    {currentFilters.sortBy && ` (Sorted by: ${currentFilters.sortBy})`}
                </h2>

                {loading && <p className="text-center text-gray-500">Loading products...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                {!loading && !error && products.length === 0 && (
                    <p className="text-center text-gray-500">No products found matching your criteria.</p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={() => handleProductClick(product.id)} // Pass the onClick handler
                        />
                    ))}
                </div>

            </div>

            {/* <div className="flex justify-center items-center mt-25">
                <img
                    src={Harvester}
                    alt="Harvester"
                    className="w-[90%] h-[85%] object-cover rounded-t-1xl"
                />
            </div> */}
        </div>
    );
}