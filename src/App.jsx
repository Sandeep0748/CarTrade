import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Cars from "./pages/Cars";
import MyBookings from "./pages/MyBookings";
import Layout from "./pages/owner/Layout";
import Dashboard from "./pages/owner/Dashboard";
import AddCar from "./pages/owner/AddCar";
import ManageCars from "./pages/owner/ManageCars";
import ManageBookings from "./pages/owner/ManageBookings";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";

const OwnerRoute = ({ children }) => {
  const { isOwner, user, loading } = useAppContext();
  if (loading) return <></>;
  if (!user || !isOwner) return <Navigate to="/" replace />;
  return children;
};

const App = () => {
  const { showLogin } = useAppContext();
  const isOwnerPath = useLocation().pathname.startsWith("/owner");

  return (
    <>
      <Toaster />
      {showLogin && <Login />}
      {!isOwnerPath && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        <Route path="/owner" element={<Layout />}>
          <Route index element={<OwnerRoute><Dashboard /></OwnerRoute>} />
          <Route path="add-car" element={<OwnerRoute><AddCar /></OwnerRoute>} />
          <Route path="manage-cars" element={<OwnerRoute><ManageCars /></OwnerRoute>} />
          <Route path="manage-bookings" element={<OwnerRoute><ManageBookings /></OwnerRoute>} />
        </Route>

        <Route path="*" element={<div className="text-center mt-20 text-xl">404 - Page Not Found</div>} />
      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  );
};

export default App;
