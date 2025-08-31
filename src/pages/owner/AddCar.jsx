import React, { useState } from "react";
import Title from "../../components/owner/Title";
import { assets } from "../../assets/assets";

const AddCar = () => {
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    category: "",
    transmission: "",
    fuelType: "",
    kmDriven: "",
    ownerType: "",
    city: "",
    description: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleImageChange = (e) => {
    setCar({ ...car, images: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic Validation
    if (
      !car.brand ||
      !car.model ||
      !car.year ||
      !car.price ||
      !car.kmDriven ||
      !car.city
    ) {
      alert("Please fill all required fields.");
      return;
    }
    if (car.year > new Date().getFullYear()) {
      alert("Year cannot be in the future.");
      return;
    }
    if (car.price <= 0 || car.kmDriven < 0) {
      alert("Please enter valid price and KM driven.");
      return;
    }
    console.log("Car for Sale Submitted:", car);
    alert("Car listed for sale successfully 🚗💰");
    // Reset form
    setCar({
      brand: "",
      model: "",
      year: "",
      price: "",
      category: "",
      transmission: "",
      fuelType: "",
      kmDriven: "",
      ownerType: "",
      city: "",
      description: "",
      images: [],
    });
  };

  return (
    <div className="px-4 md:px-10 py-10 w-full">
      {/* Title */}
      <Title
        title="Sell Your Car"
        subTitle="Fill in the details to list your car for sale, including specifications, location, and price."
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-md rounded-xl p-6 mt-6"
      >
        {/* Brand */}
        <div>
          <label className="block text-sm font-medium">Brand*</label>
          <input
            type="text"
            name="brand"
            value={car.brand}
            onChange={handleChange}
            placeholder="e.g., Toyota"
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        {/* Model */}
        <div>
          <label className="block text-sm font-medium">Model*</label>
          <input
            type="text"
            name="model"
            value={car.model}
            onChange={handleChange}
            placeholder="e.g., Fortuner"
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        {/* Year */}
        <div>
          <label className="block text-sm font-medium">Year*</label>
          <input
            type="number"
            name="year"
            value={car.year}
            onChange={handleChange}
            placeholder="e.g., 2020"
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium">Price (₹)*</label>
          <input
            type="number"
            name="price"
            value={car.price}
            onChange={handleChange}
            placeholder="e.g., 1500000"
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        {/* KM Driven */}
        <div>
          <label className="block text-sm font-medium">KM Driven*</label>
          <input
            type="number"
            name="kmDriven"
            value={car.kmDriven}
            onChange={handleChange}
            placeholder="e.g., 45000"
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        {/* Owner Type */}
        <div>
          <label className="block text-sm font-medium">Owner Type</label>
          <select
            name="ownerType"
            value={car.ownerType}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
          >
            <option value="">Select</option>
            <option value="First Owner">First Owner</option>
            <option value="Second Owner">Second Owner</option>
            <option value="Third Owner">Third Owner</option>
            <option value="Fourth Owner or More">Fourth Owner or More</option>
          </select>
        </div>

        {/* Transmission */}
        <div>
          <label className="block text-sm font-medium">Transmission</label>
          <select
            name="transmission"
            value={car.transmission}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
          >
            <option value="">Select</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </div>

        {/* Fuel Type */}
        <div>
          <label className="block text-sm font-medium">Fuel Type</label>
          <select
            name="fuelType"
            value={car.fuelType}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1"
          >
            <option value="">Select</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="CNG">CNG</option>
            <option value="Electric">Electric</option>
          </select>
        </div>

        {/* City / State */}
        <div>
          <label className="block text-sm font-medium">City / State*</label>
          <input
            type="text"
            name="city"
            value={car.city}
            onChange={handleChange}
            placeholder="e.g., Mumbai, Maharashtra"
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={car.description}
            onChange={handleChange}
            placeholder="Describe your car condition..."
            className="w-full border rounded-lg p-2 mt-1 h-24"
          />
        </div>

        {/* Image Upload */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Upload Images</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="w-full mt-1"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg shadow-md hover:bg-primary-dark transition"
          >
            <img src={assets.tick_icon} alt="" className="w-5 h-5" />
            List for Sale
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
