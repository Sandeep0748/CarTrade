import React, { useEffect, useState } from "react";
import { assets, dummyDashboardData } from "../../assets/assets";
import Title from "../../components/owner/Title";

const Dashboard = () => {
  const currency = import.meta.env.VITE_CURRENCY || "₹";

  const [data, setData] = useState({
    totalCars: 0,
    totalTrades: 0,
    pendingTrades: 0,
    completedTrades: 0,
    recentSales: [],
    monthlyRevenue: 0,
  });

  const dashboardCards = [
    { title: "Total Cars", value: data.totalCars, icon: assets.carIconColored },
    { title: "Total Trades", value: data.totalTrades, icon: assets.listIconColored },
    { title: "Pending Trades", value: data.pendingTrades, icon: assets.cautionIconColored },
    { title: "Completed Trades", value: data.completedTrades, icon: assets.listIconColored },
  ];

  useEffect(() => {
    // Load dummy data
    const updatedData = {
      totalCars: dummyDashboardData.totalCars,
      totalTrades: dummyDashboardData.totalBookings,
      pendingTrades: dummyDashboardData.pendingBookings,
      completedTrades: dummyDashboardData.completeBookings,
      recentSales: dummyDashboardData.recentBookings,
      monthlyRevenue: dummyDashboardData.monthlyRevenue,
    };
    setData(updatedData);
  }, []);

  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      <Title
        title="CarTrade Admin Dashboard"
        subTitle="Monitor overall platform performance including total cars, trades, and revenue, along with recent activity."
      />

      {/* Dashboard Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor"
          >
            <div>
              <h1 className="text-xs text-gray-500">{card.title}</h1>
              <p className="text-lg font-semibold">{card.value}</p>
            </div>

            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <img src={card.icon} alt="" className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Sales / Trades */}
      <div className="flex flex-wrap items-start gap-6 mb-8 w-full">
        <div className="p-4 md:p-6 border border-borderColor rounded-md max-w-lg w-full">
          <h1 className="text-lg font-medium">Recent Sales / Trades</h1>
          <p className="text-gray-500">Latest car trades on CarTrade</p>

          {data.recentSales.map((sale, index) => (
            <div key={index} className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <img src={assets.listIconColored} alt="" className="h-5 w-5" />
                </div>
                <div>
                  <h1>
                    {sale.car.brand} {sale.car.model}
                  </h1>
                  <p className="text-sm text-gray-500">
                    {sale.createdAt.split("T")[0]} | {sale.city || "Unknown City"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-medium">
                <p className="text-sm text-gray-500">
                  {currency} {sale.price}
                </p>
                <p className="px-3 py-0.5 border border-borderColor rounded-full text-sm">
                  {sale.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Revenue */}
        <div className="p-4 md:p-6 mb-6 border border-borderColor rounded-md w-full md:max-w-xs">
          <h1 className="text-lg font-medium">Monthly Revenue from Sales</h1>
          <p className="text-gray-500">Total revenue this month</p>
          <p className="text-3xl font-semibold text-primary">
            {currency} {data.monthlyRevenue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
