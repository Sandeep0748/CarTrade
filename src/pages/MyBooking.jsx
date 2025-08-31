import React, { useState, useEffect } from 'react';
import Titles from '../components/Titles';
import { dummyCarData, assets } from '../assets/assets';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const currency = import.meta.env.VITE_CURRENCY || "₹";

  useEffect(() => {
    const mockOrders = dummyCarData.map((car, index) => ({
      _id: car.id || car.make + car.model,
      carImage: car.image,
      car,
      status: index % 2 === 0 ? "Purchased" : "Pending",
      order: {
        orderDate: "2025-08-01",
        deliveryDate: "2025-09-05",
        deliveryLocation: "City Center",
        price: 2500
      }
    }));
    setOrders(mockOrders);
  }, []);

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl'>
      <Titles 
        title='My Orders'
        subTitle='View and manage all your car orders'
        align="left"
      />

      <div>
        {orders.length === 0 ? (
          <p className="text-gray-500 mt-6">No orders found.</p>
        ) : (
          orders.map((o, index) => (
            <div 
              key={o._id || index} 
              className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12'
            >
              {/* Car Image + Info */}
              <div className='md:col-span-1'>
                <div className='rounded-md overflow-hidden mb-3'>
                  <img 
                    src={o.carImage} 
                    alt={`${o.car.brand} ${o.car.model}`} 
                    className='w-full h-auto aspect-video object-cover' 
                  />
                </div>
                <p className='text-lg font-medium mt-2'>{o.car.brand} {o.car.model}</p>
                <p className='text-gray-500'>{o.car.year} {o.car.category} {o.car.location}</p>
              </div>

              {/* Order Info */}
              <div className='md:col-span-1 flex items-center gap-2'>
                <p className='px-3 py-1.5 bg-light rounded'>Order #{index + 1}</p>
                <p className={`px-3 py-1 text-xs rounded-full ${o.status === 'Purchased' ? 'bg-green-400/15 text-green-600' : 'bg-yellow-400/15 text-yellow-600'}`}>
                  {o.status}
                </p>
              </div>

              {/* Delivery Period */}
              <div className='flex items-start gap-2 mt-3'>
                <img src={assets.calendar_icon_colored} alt="" className='w-4 h-4 mt-1'/>
                <div>
                  <p className='text-gray-500'>Delivery Period</p>
                  <p>{o.order.orderDate} To {o.order.deliveryDate}</p>
                </div>
              </div>

              {/* Delivery Location */}
              <div className='flex items-start gap-2 mt-3'>
                <img src={assets.location_icon_colored} alt="" className='w-4 h-4 mt-1'/>
                <div>
                  <p className='text-gray-500'>Delivery Location</p>
                  <p>{o.order.deliveryLocation}</p>
                </div>
              </div>

              {/* Price */}
              <div className='md:col-span-1 flex flex-col justify-between gap-6 text-right'>
                <p className='text-gray-500'>Total Price</p>
                <h1 className='text-2xl font-semibold text-primary'>
                  {currency}{o.order.price*1000+99}
                </h1>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;
