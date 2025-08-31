import React, { useEffect, useState } from 'react';
import { assets, dummyCarData } from '../../assets/assets';
import Title from "../../components/owner/Title";

const ManageCars = () => {
  const currency = import.meta.env.VITE_CURRENCY || "₹";
  const [cars, setCars] = useState([]);

  const fetchOwnerCars = async () => {
    setCars(dummyCarData);
  };

  useEffect(() => {
    fetchOwnerCars();
  }, []);

  return (
    <div className='px-4 pt-10 md:px-10 w-full'>
      <Title 
        title='Manage Your Cars' 
        subTitle='View, edit, or remove your listed cars for sale on CarTrade.' 
      />

      <div className='max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6'>
        <table className='w-full border-collapse text-sm text-gray-600'>
          <thead className='text-gray-600'>
            <tr>
              <th className='p-3 font-medium'>Car</th>
              <th className='p-3 font-medium'>Category</th>
              <th className='p-3 font-medium'>Price</th>
              <th className='p-3 font-medium'>Status</th>
              <th className='p-3 font-medium'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={index} className='border-t border-borderColor'>
                <td className='p-3 flex items-center gap-3'>
                  <img 
                    src={car.image} 
                    alt="" 
                    className="h-12 w-12 aspect-square rounded-md object-cover" 
                  />
                  <div className='max-md:hidden'>
                    <p className='font-medium'>{car.brand} {car.model}</p>
                    <p className='font-medium'>{car.seatingCapacity} Seats | {car.transmission}</p>
                  </div>
                </td>

                <td className='p-3 max-md:hidden'>{car.category}</td>
                <td className='p-3'>{currency}{car.price}</td>

                <td className='p-3 max-md:hidden'>
                  <span className={`px-3 py-1 rounded-full text-xs ${car.isAvailable ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"}`}>
                    {car.isAvailable ? "Listed" : "Sold"}
                  </span>
                </td>

                <td className='flex items-center gap-2 p-3'>
                  <img 
                    src={car.isAvailable ? assets.eye_icon : assets.eye_close_icon} 
                    alt="View" 
                    className='cursor-pointer'
                  />
                  <img 
                    src={assets.delete_icon} 
                    alt="Delete" 
                    className='cursor-pointer'
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageCars;
