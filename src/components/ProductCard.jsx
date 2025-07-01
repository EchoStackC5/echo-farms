// src/components/ProductCard.jsx
import { MapPin, Star, StarHalf } from "lucide-react";
import trackVideo from "@/assets/videos/trackVideo.mp4";

// Add onClick to the props
export default function ProductCard({
  product, // This prop should be the actual product object from the API
  maxRating = 5,
  onClick, // New prop: onClick handler for the card
}) {
  // --- IMPORTANT FIX: Check if product is defined ---
  if (!product) {
    console.warn("ProductCard received undefined or null product prop. Skipping render.");
    return null; // Don't render anything if product data is missing
  }

  // Destructure properties directly from the 'product' object
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
   let mediaElement;
  if (images && images.length > 0 && images[0].url) {
    // Show image if available
    mediaElement = (
      <img
        src={images[0].url}
        alt={productTitle}
        className="w-[600px] md:h-[400px] h-[240px] object-cover rounded-t-lg"
      />
    );
  } else {
    // Show fallback video if no image
    mediaElement = (
      <video
        src={trackVideo}
        className="w-[600px] md:h-[400px] h-[240px] object-cover rounded-t-lg"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        aria-label="Product preview video"
      />
    );
  }

  // Determine the category to display (assuming you want the first one if it's an array)
  const categoryToDisplay = Array.isArray(category) && category.length > 0
    ? category[0] // Display the first category if 'category' is an array
    : category; // Otherwise, display as is (if it's a single string)

  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  // Define the deep gray color for stars
  const deepGrayColor = "#4B5563"; // This corresponds to Tailwind's gray-600

  return (
    // Add onClick handler to the main div and make it a button-like element for accessibility
    <button
      className="w-full bg-backgrounds border border-light-border shadow-md  rounded-lg overflow-hidden  transition-transform hover:scale-103 cursor-pointer block text-left p-0" // Added w-80 for fixed width
      onClick={onClick} // Attach the onClick prop here
      aria-label={`View details for ${productTitle}`}
    >
      {/* Image */}
      <div className="relative">
         {mediaElement}
        {/* <img
          src={mediaElement} // Use the derived image URL
          alt={productTitle} // Use productTitle for alt text
          className="w-[600px] md:h-[200px] h-[240px] object-cover rounded-t-lg" // Added rounded-t-lg for consistency
        /> */}
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
          {/* This button should prevent the parent (card) click event from firing if it's inside the card */}
          <button
            className="border font-poppins font-medium border-darkest-heading text-darkest-heading py-2 px-4 rounded-full hover:animate-pulse text-sm"
            onClick={(e) => { e.stopPropagation(); /* Add to cart logic here */ }} // Stop propagation
          >
            Add to Cart
          </button>
        </div>
      </div>
    </button>
  );
}