import React from "react";
import { assets, cityList } from "../assets/assets";

const Hero = () => {
  const [selectedCity, setSelectedCity] = React.useState("");

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-14 bg-light text-center px-4 relative">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
        Buy & Sell Cars with <span className="text-blue-600">CarTrade</span>
      </h1>
      <p className="text-gray-600 text-lg max-w-xl">
        Find your dream car or list your car for sale. Trusted dealers & verified sellers across India.
      </p>

      {/* Search Form */}
      <form className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl md:rounded-full w-full max-w-5xl bg-white/80 backdrop-blur-md shadow-xl border border-gray-200">
        
        {/* City Selection */}
        <div className="relative w-full md:w-1/3">
          <img src={assets.location_icon} alt="location" className="absolute left-3 top-3 h-5 text-gray-400" />
          <select
            required
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select City</option>
            {cityList.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Car Type Input */}
        <div className="relative w-full md:w-1/3">
          <img src={assets.car_icon} alt="car" className="absolute left-3 top-3 h-5 text-gray-400" />
          <input
            type="text"
            id="car-type"
            placeholder="SUV, Sedan, Hatchback"
            className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Budget Input */}
        <div className="relative w-full md:w-1/3">
          <img src={assets.currency_icon || assets.fuel_icon} alt="budget" className="absolute left-3 top-3 h-5 text-gray-400" />
          <input
            type="number"
            id="budget"
            placeholder="Max Budget (₹)"
            className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold rounded-full shadow-lg transition-all duration-300"
        >
          <img src={assets.search_icon} alt="search" className="h-4 w-4 brightness-0 invert" />
          Search
        </button>
      </form>

      {/* Hero Car Image */}
      <img src={assets.main_car} alt="car" className="max-h-74 drop-shadow-xl" />
    </div>
  );
};

export default Hero;
