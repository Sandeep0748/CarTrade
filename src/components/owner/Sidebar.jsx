import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { dummyUserData, assets, ownerMenuLinks } from "../../assets/assets";

const Sidebar = () => {
  const user = dummyUserData;
  const location = useLocation();
  const [image, setImage] = useState(null);
  const [userImage, setUserImage] = useState(user?.image || null);

  const updateImage = () => {
    if (image) {
      setUserImage(URL.createObjectURL(image));
      setImage(null);
    }
  };

  return (
    <div className="relative min-h-screen md:flex flex-col items-center pt-8 max-w-16 md:max-w-60 w-full border-r border-borderColor bg-white text-sm shadow-sm">
      
      {/* ✅ Profile Section */}
      <div className="flex flex-col items-center gap-2">
        <div className="group relative">
          <label htmlFor="image" className="cursor-pointer">
            <img 
              src={image ? URL.createObjectURL(image) : userImage || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300"} 
              alt="User Avatar" 
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border border-gray-200 shadow-sm"
            />
            <input 
              type="file" 
              id="image" 
              accept="image/*" 
              hidden 
              onChange={e => setImage(e.target.files[0])}
            />
            {/* Hover edit overlay */}
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/20 rounded-full hidden group-hover:flex items-center justify-center">
              <img src={assets.edit_icon} alt="Edit" className="w-5 h-5"/>
            </div>
          </label>
        </div>

        {/* ✅ Save Button */}
        {image && (
          <button 
            onClick={updateImage}
            className="flex items-center gap-1 px-3 py-1 mt-2 bg-primary/10 text-primary rounded-md text-xs hover:bg-primary/20"
          >
            Save <img src={assets.check_icon} width={13} alt="Save" />
          </button>
        )}

        {/* ✅ User Name */}
        <p className="mt-2 text-base font-medium text-gray-800 max-md:hidden">{user?.name}</p>
        <p className="text-xs text-gray-500 max-md:hidden">{user?.role || "Car Owner"}</p>
      </div>

      {/* ✅ Menu Links */}
      <div className="w-full mt-8">
        {ownerMenuLinks.map((link, index) => {
          const isActive = link.path === location.pathname;
          return (
            <NavLink
              key={index}
              to={link.path}
              className={`relative flex items-center gap-3 w-full py-3 pl-5 transition-all duration-200 
                ${isActive ? "bg-primary/10 text-primary font-medium" : "text-gray-600 hover:bg-gray-50"}`}
            >
              <img src={isActive ? link.coloredIcon : link.icon} alt={link.name} className="w-5 h-5"/>
              <span className="max-md:hidden">{link.name}</span>
              {isActive && (
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary rounded-r"></div>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
