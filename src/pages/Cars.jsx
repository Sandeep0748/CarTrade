import React, { useState } from 'react';
import Titles from '../components/Titles';
import { assets, dummyCarData } from '../assets/assets';
import CarCard from '../components/CarCard';

const Cars = () => {
  const [input, setInput] = useState('');

  // Filter cars based on search input
  const filteredCars = dummyCarData.filter((car) =>
    `${car.make} ${car.model} ${car.features}`
      .toLowerCase()
      .includes(input.toLowerCase())
  );

  return (
    <div>
      {/* Title & Search */}
      <div className="flex flex-col items-center py-20 bg-gray-50 max-md:px-4">
        <Titles
          title="Cars for Sale on CarTrade"
          subTitle="Explore verified listings across India and find the car that fits your lifestyle and budget"
        />

        <div className="flex items-center bg-white px-4 mt-6 max-w-2xl w-full h-12 rounded-full shadow border border-gray-200">
          <img
            src={assets.search_icon}
            alt="search"
            className="w-5 h-5 mr-3 opacity-70"
          />

          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Search by make, model, or features (e.g., Maruti Swift, Diesel)"
            className="w-full h-full outline-none text-gray-600 placeholder:text-gray-400"
          />

          <img
            src={assets.filter_icon}
            alt="filter"
            className="w-5 h-5 ml-3 opacity-70 cursor-pointer"
          />
        </div>
      </div>

      {/* Cars List */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
        <p className="text-gray-600 xl:px-20 max-w-7xl mx-auto text-sm md:text-base">
          Showing <span className="font-semibold">{filteredCars.length}</span> cars in India
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 xl:px-20 max-w-7xl mx-auto">
          {filteredCars.map((car, index) => (
            <div key={index}>
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
