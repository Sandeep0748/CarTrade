import React from 'react'

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 max-md:px-4 my-16 mb-40">
      
      <h1 className="md:text-4xl text-2xl font-semibold text-gray-800">Never Miss a Car Deal!</h1>
      <p className="md:text-lg text-gray-500/70 pb-4 max-w-lg">
        Subscribe to get the latest car listings, new arrivals, and exclusive offers from CarTrade.
      </p>

      <form className="flex flex-col md:flex-row items-center justify-center max-w-2xl w-full md:h-13 h-12 gap-2">
        <input
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full md:rounded-r-none px-3 text-gray-500"
          type="email"
          placeholder="Enter your email address"
          required
        />
        <button 
          type="submit" 
          className="md:px-12 px-8 h-full text-white bg-blue-600 hover:bg-blue-700 transition-all cursor-pointer rounded-md md:rounded-l-none"
        >
          Subscribe
        </button>
      </form>
      
    </div>
  )
}

export default Newsletter
