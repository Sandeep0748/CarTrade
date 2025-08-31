import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { assets, dummyCarData } from '../assets/assets';
import Loader from '../components/Loader';

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const currency = import.meta.env.VITE_CURRENCY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 🚀 In CarTrade, this will be replaced with "Make an Offer" or "Proceed to Trade"
    alert(`Your interest for ${car.brand} ${car.model} has been submitted! Our team will contact you soon.`);
  };

  useEffect(() => {
    setCar(dummyCarData.find((car) => car._id === id));
  }, [id]);

  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-32 mb-16">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer"
      >
        <img src={assets.arrow_icon} alt="" className="rotate-180 opacity-65" />
        Back to Listings
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left: Car Image & Details */}
        <div className="lg:col-span-2">
          <img
            src={car.image}
            alt=""
            className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md"
          />

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-500 text-lg">
                {car.category} • {car.year} Model
              </p>
            </div>
            <hr className="border-borderColor my-6" />

            {/* Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: assets.seat_icon, text: `${car.seating_capacity} Seats` },
                { icon: assets.fuel_icon, text: car.fuel_type },
                { icon: assets.car_icon, text: car.transmission },
                { icon: assets.location_icon, text: car.location },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex flex-col items-center bg-light p-4 rounded-lg"
                >
                  <img src={icon} alt="" className="h-5 mb-2" />
                  {text}
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h1 className="text-xl font-medium mb-3">Car Overview</h1>
              <p className="text-gray-500">{car.description}</p>
            </div>

            {/* Features */}
            <div>
              <h1 className="text-xl font-medium mb-3">Key Features</h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  '360 Camera',
                  'Bluetooth',
                  'GPS',
                  'Heated Seats',
                  'Rear View Mirror',
                  'Touchscreen Display',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-gray-500"
                  >
                    <img src={assets.check_icon} alt="" className="h-4 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Trade / Interest Form */}
        <form
          onSubmit={handleSubmit}
          className="shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500"
        >
          <p className="flex items-center justify-between text-2xl text-gray-800 font-semibold">
            {currency}
            {car.pricePerDay}
            <span className="text-base text-gray-400 font-normal">
              Estimated Value
            </span>
          </p>

          <hr className="border-borderColor my-6" />

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              className="border border-borderColor px-3 py-2 rounded-lg"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="border border-borderColor px-3 py-2 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="border border-borderColor px-3 py-2 rounded-lg"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <button className="w-full bg-primary hover:bg-primary-dull transition-all py-3 font-medium text-white rounded-xl cursor-pointer">
            Proceed to Trade
          </button>

          <p className="text-center text-sm">
            No payment required — our team will connect with you.
          </p>
        </form>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default CarDetails;
