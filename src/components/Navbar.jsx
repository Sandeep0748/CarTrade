import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all ${location.pathname === "/" ? "bg-light" : "bg-white"}`}>

      {/* Logo */}
      <Link to='/'>
        <img src={assets.logo} alt="CarTrade Logo" className="h-8" />
      </Link>

      {/* Menu Links */}
      <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${location.pathname === "/" ? "bg-light" : "bg-white"} ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}>
        
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path} className="hover:text-blue-600 transition-colors">
            {link.name}
          </Link>
        ))}

        {/* New Links: Cart, Wishlist, Profile */}
        <Link to="/cart" className="hover:text-blue-600 transition-colors">Cart</Link>
        <Link to="/wishlist" className="hover:text-blue-600 transition-colors">Wishlist</Link>
        <Link to="/profile" className="hover:text-blue-600 transition-colors">Profile</Link>

        {/* Search Bar */}
        <div className='hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56'>
          <input 
            type="text" 
            className="py-1.5 w-full bg-transparent outline-none placeholder:text-gray-500" 
            placeholder="Search cars, brands..." 
          />
          <img src={assets.search_icon} alt="search" />
        </div>

        {/* Buttons */}
        <div className='flex max-sm:flex-col items-start sm:items-center gap-4'>
          <button 
            onClick={() => navigate('/owner')}
            className="cursor-pointer px-4 py-2 text-sm font-medium hover:bg-blue-50 rounded-lg transition-colors"
          >
            Dashboard
          </button>
          <button 
            onClick={() => setShowLogin(true)}
            className="cursor-pointer px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-lg text-sm"
          >
            Login
          </button>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button className='sm:hidden cursor-pointer' aria-label="Menu" onClick={() => setOpen(!open)}>
        <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
      </button>

    </div>
  )
}

export default Navbar
