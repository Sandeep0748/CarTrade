// src/components/Wishlist.jsx
import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  const removeItem = (id) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Your Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-20">
          <img
            src={assets.empty_wishlist || assets.main_car}
            alt="Empty Wishlist"
            className="mx-auto h-40 opacity-60"
          />
          <p className="text-gray-500 mt-4 text-lg">
            Your wishlist is empty. Start adding your favorite cars!
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 relative"
            >
              {/* Car Image */}
              <div className="h-40 w-full overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image || assets.main_car}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Car Info */}
              <h2 className="font-semibold text-lg text-gray-800">
                {item.name}
              </h2>
              <p className="text-blue-600 font-bold text-md mt-1">
                ₹{item.price?.toLocaleString()}
              </p>
              {item.fuel && (
                <p className="text-gray-500 text-sm">{item.fuel} • {item.year}</p>
              )}

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md transition"
                title="Remove from Wishlist"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
