import React, { useState, useEffect } from 'react';
import { assets, dummyCarData } from '../../assets/assets';
import Title from "../../components/owner/Title";

const ManageBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY || "₹";
  const [trades, setTrades] = useState([]);

  const fetchOwnerTrades = async () => {
    const dummyTradeData = dummyCarData.map((car, index) => ({
      _id: car.id || index,
      car,
      saleDate: "2025-08-20T10:00:00Z",
      price: 500000 + index * 100000,
      status: index % 2 === 0 ? "Listed" : "Sold",
      paymentStatus: index % 2 === 0 ? "Pending" : "Paid",
    }));
    setTrades(dummyTradeData);
  };

  useEffect(() => {
    fetchOwnerTrades();
  }, []);

  return (
    <div className='px-4 pt-10 md:px-10 w-full'>
      <Title 
        title='Manage Trades / Sales' 
        subTitle='View, edit, or remove your listed car sales or trades on CarTrade.' 
      />

      <div className='max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6'>
        <table className='w-full border-collapse text-sm text-gray-600'>
          <thead className='text-gray-500'>
            <tr>
              <th className='p-3 font-medium'>Car</th>
              <th className='p-3 font-medium'>Sale Date</th>
              <th className='p-3 font-medium'>Price</th>
              <th className='p-3 font-medium'>Payment Status</th>
              <th className='p-3 font-medium'>Status</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade, index) => (
              <tr key={index} className='border-t border-borderColor text-gray-500'>
                <td className='p-3 flex items-center gap-3'>
                  <img
                    src={trade.car.image}
                    alt=""
                    className="h-12 w-12 rounded-md object-cover"
                  />
                  <p className='font-medium max-md:hidden'>
                    {trade.car.brand} {trade.car.model}
                  </p>
                </td>

                <td className="p-3 max-md:hidden">
                  {trade.saleDate.split('T')[0]}
                </td>

                <td className='p-3'>{currency}{trade.price}</td>

                <td className='p-3 max-md:hidden'>
                  <span className={`px-3 py-1 rounded-full text-xs ${trade.paymentStatus === 'Paid' ? 'bg-green-100 text-green-500' : 'bg-yellow-100 text-yellow-500'}`}>
                    {trade.paymentStatus}
                  </span>
                </td>

                <td className='p-3'>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      trade.status === 'Sold'
                        ? 'bg-green-100 text-green-500'
                        : 'bg-blue-100 text-blue-500'
                    }`}
                  >
                    {trade.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageBookings;
