import React from 'react';
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-20 text-sm text-gray-500'>        
      
      {/* Top Section */}
      <div className='flex flex-wrap justify-between items-start gap-8 pb-6 border-b border-borderColor'>

        {/* Logo & Description */}
        <div>
          <img src={assets.logo} alt="CarTrade Logo" className='h-8 md:h-9' />
          <p className='max-w-80 mt-3'>
            Trade or sell your car effortlessly with CarTrade. Premium marketplace for luxury, used, and everyday vehicles.
          </p>
          <div className='flex items-center gap-3 mt-6'>
            <a href="#"><img src={assets.facebook_logo} alt="facebook" className='h-5 w-5'/></a>
            <a href="#"><img src={assets.twitter_logo} alt="twitter" className='h-5 w-5'/></a>
            <a href="#"><img src={assets.instagram_logo} alt="instagram" className='h-5 w-5'/></a>
            <a href="#"><img src={assets.gmail_logo} alt="gmail" className='h-5 w-5'/></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className='text-base font-bold text-gray-800 uppercase'>Quick Links</h2>
          <ul className='mt-3 flex flex-col gap-1.5'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Browse Cars</a></li>
            <li><a href="#">List Your Car</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className='text-base font-bold text-gray-800 uppercase'>Resources</h2>
          <ul className='mt-3 flex flex-col gap-1.5'>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Insurance</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className='text-base font-bold text-gray-800 uppercase'>Contact</h2>
          <ul className='mt-3 flex flex-col gap-1.5'>
            <li><a href="#">1234 CarTrade Avenue</a></li>
            <li><a href="#">New Delhi, India 110001</a></li>
            <li><a href="#">+91 98765 43210</a></li>
            <li><a href="#">support@cartrade.com</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
        <p>© {new Date().getFullYear()} CarTrade. All rights reserved.</p>
        <ul className='flex items-center gap-4'>
          <li><a href="#">Privacy</a></li>
          <li>|</li>
          <li><a href="#">Terms</a></li>
          <li>|</li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Footer;
