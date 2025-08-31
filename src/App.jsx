// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import Cars from './pages/Cars';
import MyBooking from './pages/MyBooking';
import Layout from './pages/owner/Layout';
import Dashboard from './pages/owner/Dashboard';
import AddCar from './pages/owner/AddCar';
import ManageCars from './pages/owner/ManageCars';
import ManageBookings from './pages/owner/ManageBookings';
import Login from './components/Login';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars-details/:id' element={<CarDetails />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/my-bookings' element={<MyBooking />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/profile' element={<ProfilePage />} />

        <Route path='/owner' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='add-car' element={<AddCar />} />
          <Route path='manage-cars' element={<ManageCars />} />
          <Route path='manage-bookings' element={<ManageBookings />} />
        </Route>

        {/* Optional 404 page */}
        <Route path='*' element={<div className='text-center mt-20 text-xl'>404 - Page Not Found</div>} />
      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  );
};

export default App; // ✅ default export
