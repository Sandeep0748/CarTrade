import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';

const NavbarDealer = () => {
  const { user } = useAppContext();

  return (
    <div className="flex items-center justify-between px-6 md:px-10 py-4 text-gray-700 border-b border-borderColor bg-white shadow-sm">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="CarTrade Logo" className="h-8" />
      </Link>

      {/* User */}
      <p className="text-sm font-semibold">
        Welcome, {user?.name || "Dealer"}
      </p>
    </div>
  );
};

export default NavbarDealer;
