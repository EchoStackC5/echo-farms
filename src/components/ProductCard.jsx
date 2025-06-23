import { MapPin, Star, StarHalf } from "lucide-react";
import Caterpillar from "../assets/images/cat.png";

export default function ProductCard({
  product, image, location, price, description, category, rating = 4.6, maxRating = 5,
}) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className=" mt-[55px] ">
      <div className="w-[397px] h-[765px] cursor-pointer border rounded-t-3xl mx-auto ">
        {/* Image */}
        <div className=" h-[555px]">
          <img
            src={Caterpillar}
            alt={product}
            className="w-full h-full object-cover rounded-t-3xl bg-green-700 " />
        </div>

        <div>
          {/* Info Section */}
          <div className="px-4 py-3 space-y-2 absolute w-[397px] h-[210px] border p-[15px] pr-[20px] pl-[20px] gap-[11px bg-white">
            <h3 className="text-sm line-clamp-2 text-[#35413B] text-[18px] font-medium leading-[28px]">
              Caterpillar {product}
            </h3>

            <p className="text-[#6B7280] text-[15px] leading-[24px] tracking-[0.15px]">
              Powerful and durable bulldozer {description}
            </p>

            {/* Price */}
            <p className="text-[18px] font-medium text-[#111827]"> GHC 50,000{price}</p>

            {/* Location */}
            <div className="flex items-center text-[15px] text-[#4B5563] mt-2">
              <MapPin className="w-3.5 h-3.5  text-gray-700 mr-1 fill-foreground" />
              <span> Accra{location}</span>
            </div>

            {/* Category */}
            <div className="absolute bg-white transition-opacity duration-300" />
            {category && (
              <span className=" top-3 left-3 bg-green-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                {category}
              </span>
            )}

             {/* Rating and add to cart button */}
          <div className="flex items-center space-x-1 mt-2 h-[31px]">
            {/* Star Rating (with half-star support) */}
            <div className="flex items-center space-x-1">
              {Array.from({ length: fullStars }).map((_, i) => (
                <Star key={"full" + i} size={16} fill="currentColor" color="#FBBF24" className="stroke-none" />
              ))}
              {hasHalf && (
                <StarHalf size={16} fill="currentColor" color="#FBBF24" className="stroke-none" />
              )}
              {Array.from({ length: maxRating - fullStars - (hasHalf ? 1 : 0) }).map((_, i) => (
                <Star key={"empty" + i} size={16} fill="none" color="#D1D5DB" />
              ))}
              <span className="text-[#35413B] text-[15px] ml-1">({rating.toFixed(1)})</span>
            </div>

            {/* Add to Cart Button */}
            <div className="flex justify-end ">
                <button className="text-xs font-medium hover:bg-gray-100 transition-colors text-[15px] border border-[#9CA3AF] px-5 py-2 rounded-full text-[#35413B] ml-24">
              Add to Cart
            </button>
              </div>
          </div>
              
          </div>

         

        </div>





      </div>
    </div>
  );
}