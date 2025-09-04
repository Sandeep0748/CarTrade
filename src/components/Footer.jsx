import React from 'react';
import { assets } from "../assets/assets";
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='px-6 md:px-16 lg:px-24 xl:px-32 mt-24 text-sm text-gray-500'
    >
      {/* Top Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='flex flex-wrap justify-between items-start gap-8 pb-6 border-b border-gray-200'
      >
        {/* Logo & About */}
        <div>
          <motion.img 
            src={assets.logo} 
            alt="CarTrade Logo" 
            className='h-8 md:h-9'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.p 
            className='max-w-80 mt-3 text-gray-600'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            CarTrade is India’s trusted marketplace to buy, sell, or trade your vehicle. 
            Get verified buyers, secure payments, and a seamless car trading experience.
          </motion.p>
          {/* Social Links */}
          <motion.div 
            className='flex items-center gap-3 mt-6'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="#"><img src={assets.facebook_logo} className='w-5 h-5 hover:opacity-80 transition' alt="facebook" /></a>
            <a href="#"><img src={assets.instagram_logo} className='w-5 h-5 hover:opacity-80 transition' alt="instagram" /></a>
            <a href="#"><img src={assets.twitter_logo} className='w-5 h-5 hover:opacity-80 transition' alt="twitter" /></a>
            <a href="#"><img src={assets.gmail_logo} className='w-5 h-5 hover:opacity-80 transition' alt="gmail" /></a>
          </motion.div>
        </div>

        {/* Links */}
        <div className='flex flex-wrap gap-10 md:gap-16'>
          {/* Quick Links */}
          <div>
            <h2 className='text-base font-semibold text-gray-800 uppercase'>Quick Links</h2>
            <ul className='mt-3 flex flex-col gap-1.5'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Browse Cars</a></li>
              <li><a href="#">List Your Car</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className='text-base font-semibold text-gray-800 uppercase'>Resources</h2>
            <ul className='mt-3 flex flex-col gap-1.5'>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Insurance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className='text-base font-semibold text-gray-800 uppercase'>Contact</h2>
            <ul className='mt-3 flex flex-col gap-1.5'>
              <li>1234 CarTrade Avenue</li>
              <li>New Delhi, India 110001</li>
              <li>+91 98765 43210</li>
              <li>support@cartrade.com</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'
      >
        <p>© {new Date().getFullYear()} CarTrade. All rights reserved.</p>
        <ul className='flex items-center gap-4'>
          <li><a href="#">Privacy</a></li>
          <li>|</li>
          <li><a href="#">Terms</a></li>
          <li>|</li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </motion.div>
    </motion.footer>
  )
}

export default Footer;
