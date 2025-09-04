import React from 'react'
import { motion } from "motion/react";

const Newsletter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center text-center space-y-5 max-md:px-4 my-20 mb-40"
    >
      {/* Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="md:text-4xl text-2xl font-bold text-gray-900"
      >
        🚗 Never Miss a Car Deal!
      </motion.h1>

      {/* Subtext */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="md:text-lg text-gray-600 pb-4 max-w-lg"
      >
        Subscribe to get the latest <span className="font-semibold text-blue-600">CarTrade</span> listings, 
        hot deals, and exclusive offers — straight to your inbox.
      </motion.p>

      {/* Input + Button */}
      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-center max-w-2xl w-full gap-2"
      >
        <input
          className="border border-gray-300 rounded-md h-12 border-r-0 outline-none w-full md:rounded-r-none px-4 text-gray-700 focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Enter your email address"
          required
        />
        <button 
          type="submit" 
          className="md:px-12 px-8 h-12 text-white bg-blue-600 hover:bg-blue-700 transition-all cursor-pointer rounded-md md:rounded-l-none font-medium shadow-md"
        >
          Subscribe
        </button>
      </motion.form>

      {/* Small trust note */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-xs text-gray-400 mt-2"
      >
        🔒 We respect your privacy. Unsubscribe anytime.
      </motion.p>
    </motion.div>
  )
}

export default Newsletter
