import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>

      {/* Left Text Section */}
      <div className='flex flex-col gap-2'>
        <h2 className='text-3xl font-medium text-white'>Own a Luxury Car?</h2>
        <p className='text-white/90 text-base'>Monetize your vehicle effortlessly by listing it on CarTrade.</p>
        <p className='text-white/80 max-w-md text-sm'>
          We handle insurance verification and secure payments, so you can sell or trade your car stress-free.
        </p>

        <button className='px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer'>
          List Your Car
        </button>
      </div>

      {/* Right Image */}
      <img 
        src={assets.banner_car_image} 
        alt="Luxury Car" 
        className='max-h-60 mt-8 md:mt-0 object-contain'
      />

    </div>
  )
}

export default Banner;
