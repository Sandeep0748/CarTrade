import React from 'react';
import Titles from './Titles';
import { dummyCarData, assets } from '../assets/assets'; 
import CarCard from './CarCard';
import { useNavigate } from 'react-router-dom';

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center py-6 md:px-16 lg:px-24 xl:px-32">
      
      <div>
        <Titles 
          title="Featured Cars for Sale" 
          subTitle="Browse our top deals on used and new cars from trusted sellers" 
        />
      </div>

      {/* ✅ Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {dummyCarData.slice(0, 6).map((car, index) => (
          <CarCard key={car.id || index} car={car} />
        ))}
      </div>

      {/* ✅ Explore All Cars Button */}
      <button 
        onClick={() => {
          navigate('/cars'); 
          window.scrollTo(0, 0); 
        }}
        className="flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50 rounded-md mt-12 cursor-pointer"
      >
        Explore All Cars 
        <img src={assets.arrow_icon} alt="arrow" />
      </button>

    </div>
  );
};

export default FeaturedSection;
