import React from "react";
import { assets } from "../assets/assets";  
import Titles from "./Titles";

const Testimonial = () => {
  const testimonials = [
    { 
      name: "Anjali Singh",
      address: "Mumbai, India",
      image: assets.testimonial_image_1,
      testimonial: "CarTrade made selling my car effortless and secure." 
    },
    { 
      name: "Megha Shetty",
      address: "Bengaluru, India",
      image: assets.testimonial_image_2,
      testimonial: "I found my dream car on CarTrade quickly and hassle-free!" 
    },
    { 
      name: "Sanu",
      address: "Delhi, India",
      image: assets.testimonial_image_3,
      testimonial: "Highly recommend CarTrade for trusted sellers and buyers." 
    },
  ];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <Titles 
        title="What Our Customers Say" 
        subTitle="Discover why car buyers and sellers trust CarTrade for seamless transactions."
      />
            
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img 
                className="w-12 h-12 rounded-full" 
                src={testimonial.image} 
                alt={testimonial.name} 
              />
              <div>
                <p className="text-xl font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.address}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1 mt-4">
              {Array(5).fill(0).map((_, index) => (
                <img key={index} src={assets.star_icon} alt="star" className="w-5 h-5" />
              ))}
            </div>
            
            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
