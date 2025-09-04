import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { motion } from 'motion/react'

const Navbar = () => {

  const {setShowLogin, user, logout, isOwner, axios, setIsOwner}=
  useAppContext()

  const location = useLocation()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const changeRole = async () => {
    try {
     const {data} = await axios.post('api/owner/change-role')
     if (data.success) {
      setIsOwner(true)
      toast.success(data.message)
     }else{
      toast.error(data.message)
     }
    } catch (error){
      toast.error(error.message)
    }
  }




  return (
    <motion.div 
        initial={{y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.5}}
        className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all ${location.pathname === "/" && "bg-light"}`}>

      {/* Logo */}
      <Link to='/'>
                  <motion.img whileHover={{scale: 1.05}} src={assets.logo} alt="logo" className="h-8"/>
              </Link>

      {/* Menu Links */}
      <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${location.pathname === "/" ? "bg-light" : "bg-white"} ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}>
        
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path} className="hover:text-blue-600 transition-colors">
            {link.name}
          </Link>
        ))}

        {/* New Links: Cart, Wishlist, Profile */}
        {/* <Link to="/cart" className="hover:text-blue-600 transition-colors">Cart</Link>
        <Link to="/wishlist" className="hover:text-blue-600 transition-colors">Wishlist</Link>
        <Link to="/profile" className="hover:text-blue-600 transition-colors">Profile</Link> */}

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
            onClick={() => isOwner ? navigate('/owner') : changeRole()}
            className="cursor-pointer px-4 py-2 text-sm font-medium hover:bg-blue-50 rounded-lg transition-colors"
          >
            {isOwner ? 'Dashboard' : 'List cars'}
          </button>
          <button 
            onClick={() => {user ? logout() : setShowLogin(true)}}
            className="cursor-pointer px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-lg text-sm"
          >
            {user ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button className='sm:hidden cursor-pointer' aria-label="Menu" onClick={() => setOpen(!open)}>
        <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
      </button>

    </motion.div>
  )
}

export default Navbar
