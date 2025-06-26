// src/components/ProductCard.jsx
import { MapPin, Star, StarHalf } from "lucide-react";

export default function ProductCard({
  product, // This prop should be the actual product object from the API
  maxRating = 5,
}) {
  // --- IMPORTANT FIX: Check if product is defined ---
  if (!product) {
    console.warn("ProductCard received undefined or null product prop. Skipping render.");
    return null; // Don't render anything if product data is missing
  }

  // Destructure properties directly from the 'product' object
  // Renamed from 'name' to 'productTitle' to match API response field
  // Renamed 'image_url' to 'images' to match API response field (which is an array of image objects)
  const {
    id, // Ensure your API response for product includes 'id'
    productTitle, // Matches API response
    images, // Matches API response, an array of image objects
    location,
    price,
    price_currency = 'Gh₵', // Default to GHC if API doesn't provide currency
    description,
    category, // API's 'category' is an array of strings
    rating = 4.6, // Default to 0 if rating is not provided by API
  } = product;

  // Basic validation for critical fields, optional but good for debugging
  if (!productTitle || !id) {
    console.warn("ProductCard received product without required 'productTitle' or 'id':", product);
    return null; // Skip rendering if critical data is missing
  }

  // Determine the primary image URL
  const imageUrlToDisplay = images && images.length > 0 && images[0].url
    ? images[0].url // Use the URL from the first image object in the array
    : 'https://placehold.co/397x555/F0F0F0/000000?text=No+Image'; // Fallback

  // Determine the category to display (assuming you want the first one if it's an array)
  const categoryToDisplay = Array.isArray(category) && category.length > 0
    ? category[0] // Display the first category if 'category' is an array
    : category; // Otherwise, display as is (if it's a single string)

  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  // Define the deep gray color for stars
  const deepGrayColor = "#4B5563"; // This corresponds to Tailwind's gray-600

  return (
    // Removed the outer 'mt-20' and the internal 'grid grid-cols...' wrapper.
    // The margin and grid should be handled by the parent component (Products.jsx)
    // Apply the width, background, border, shadow, and rounded classes directly here.
    <div className="max-w-[280px] sm:max-w-[320px] bg-backgrounds border border-light-border shadow-lg rounded-lg overflow-hidden mx-auto transition-transform hover:scale-103 hover:shadow-green-500">

      {/* Image */}
      <div className="relative">
        <img
          src={imageUrlToDisplay} // Use the derived image URL
          alt={productTitle} // Use productTitle for alt text
          className="w-full md:h-[400px] h-[240px] object-cover rounded-t-lg" // Added rounded-t-lg for consistency
        />
      </div>

      {/* Info Section */}
      <div className="p-4 space-y-3">
        <h3 className="text-darkest-heading font-lato font-medium text-[16px] leading-tight line-clamp-2">
          {productTitle} {/* Dynamically display product title */}
        </h3>

        <p className="text-secondary-text text-sm font-medium font-roboto line-clamp-2">
          {description} {/* Dynamically display description */}
        </p>

        {/* Price */}
        <p className="text-darkest-heading font-lato text-lg font-semibold">
          {price_currency} {price?.toLocaleString() || 'N/A'} {/* Dynamically display price */}
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-secondary-text font-inter text-sm">
          <MapPin className="w-4 h-4 flex-shrink-0 " />
          <span>{location || 'N/A'}</span> {/* Dynamically display location */}
        </div>

        {/* Category Tag - Adjusted positioning and added margin-top for spacing */}
        {categoryToDisplay && (
          <span className="inline-block mt-2 text-gray-700 text-sm font-medium px-0 py-1 rounded-full">
            {categoryToDisplay} {/* Dynamically display category */}
          </span>
        )}

        {/* Rating and Add to Cart Button */}
        <div className="flex items-center justify-between pt-1">
          {/* Star Rating (with half-star support) */}
          <div className="flex items-center h-4 space-x-0.5">
            {Array.from({ length: fullStars }).map((_, i) => (
              <Star
                key={"full" + i}
                size={16}
                fill={deepGrayColor} // Directly set fill to the hex code
                className="stroke-none"
              />
            ))}
            {hasHalf && (
              <StarHalf
                size={16}
                fill={deepGrayColor} // Directly set fill to the hex code
                className="stroke-none"
              />
            )}
            {Array.from({ length: maxRating - fullStars - (hasHalf ? 1 : 0) }).map((_, i) => (
              <Star
                key={"empty" + i}
                size={16}
                fill="none" // Empty stars should not be filled
                color={deepGrayColor} // Set color for the stroke of empty stars
              />
            ))}
            <span className="text-[#35413B] text-[15px] ml-1">({rating.toFixed(1)})</span>
          </div>


          {/* Add to Cart Button */}
          <button className="border font-poppins font-medium border-darkest-heading text-darkest-heading py-2 px-4 rounded-full cursor-pointer hover:animate-pulse text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}