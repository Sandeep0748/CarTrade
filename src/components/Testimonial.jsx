import React from "react";
import { assets } from "../assets/assets";  
import Titles from "./Title";
import { motion } from "motion/react";

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
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-28 px-6 md:px-16 lg:px-24 xl:px-44"
    >
      <Titles 
        title="What Our Customers Say 🚗" 
        subTitle="Trusted by thousands across India for buying and selling cars the smart way."
      />
            
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* Profile */}
            <div className="flex items-center gap-3">
              <img 
                className="w-12 h-12 rounded-full border border-gray-200" 
                src={testimonial.image} 
                alt={testimonial.name} 
              />
              <div>
                <p className="text-lg font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.address}</p>
              </div>
            </div>
            
            {/* Stars */}
            <div className="flex items-center gap-1 mt-4">
              {Array(5).fill(0).map((_, starIndex) => (
                <img 
                  key={starIndex} 
                  src={assets.star_icon} 
                  alt="star" 
                  className="w-5 h-5 drop-shadow-sm"
                />
              ))}
            </div>
            
            {/* Feedback */}
            <p className="text-gray-600 mt-4 italic leading-relaxed">
              "{testimonial.testimonial}"
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;
