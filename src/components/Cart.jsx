// src/components/Cart.jsx
import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <img
            src={assets.empty_cart || assets.main_car}
            alt="Empty Cart"
            className="mx-auto h-40 opacity-60"
          />
          <p className="text-gray-500 mt-4 text-lg">
            Your cart is empty. Add some cars to proceed!
          </p>
        </div>
      ) : (
        <div>
          {/* Cart Items */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cartItems.map((item) => (
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
                  <p className="text-gray-500 text-sm">
                    {item.fuel} • {item.year}
                  </p>
                )}

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md transition"
                  title="Remove from Cart"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-8 bg-gray-100 p-6 rounded-xl shadow-md flex flex-col sm:flex-row justify-between items-center">
            <h2 className="text-xl font-semibold">
              Total: <span className="text-blue-600">₹{totalPrice.toLocaleString()}</span>
            </h2>
            <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
