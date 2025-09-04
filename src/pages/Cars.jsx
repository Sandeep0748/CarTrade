import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CarCard from '../components/CarCard';
import { useAppContext } from '../context/AppContext';
import { motion } from 'motion/react';

const Cars = () => {
  const { cars } = useAppContext(); // ✅ Cars from backend API
  const [input, setInput] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);

  // Apply filter
  const applyFilter = () => {
    if (input === '') {
      setFilteredCars(cars);
      return;
    }

    const filtered = cars.filter(
      (car) =>
        car.brand.toLowerCase().includes(input.toLowerCase()) ||
        car.model.toLowerCase().includes(input.toLowerCase()) ||
        (car.features && car.features.toLowerCase().includes(input.toLowerCase())) ||
        (car.category && car.category.toLowerCase().includes(input.toLowerCase()))
    );
    setFilteredCars(filtered);
  };

  // Run filter whenever input/cars update
  useEffect(() => {
    if (cars.length > 0) {
      applyFilter();
    }
  }, [input, cars]);

  return (
    <div>
      {/* Title & Search */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center py-20 bg-gray-50 max-md:px-4"
      >
        <Title
          title="Cars for Sale on CarTrade"
          subTitle="Browse verified listings and find the car that fits your lifestyle and budget"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center bg-white px-4 mt-6 max-w-2xl w-full h-12 rounded-full shadow border border-gray-200"
        >
          <img
            src={assets.search_icon}
            alt="search"
            className="w-5 h-5 mr-3 opacity-70"
          />

          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Search by brand, model, category, or features"
            className="w-full h-full outline-none text-gray-600 placeholder:text-gray-400"
          />

          <img
            src={assets.filter_icon}
            alt="filter"
            className="w-5 h-5 ml-3 opacity-70 cursor-pointer"
          />
        </motion.div>
      </motion.div>

      {/* Cars List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10"
      >
        <p className="text-gray-600 xl:px-20 max-w-7xl mx-auto text-sm md:text-base">
          Showing <span className="font-semibold">{filteredCars.length}</span>{' '}
          cars available
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 xl:px-20 max-w-7xl mx-auto">
          {filteredCars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Cars;
