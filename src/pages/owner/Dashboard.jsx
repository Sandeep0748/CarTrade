import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import Title from "../../components/owner/Title";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { axios, isOwner, user, currency, loading } = useAppContext();

  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  });

  const dashboardCards = [
    { title: "Total Cars", value: data.totalCars, icon: assets.carIconColored },
    { title: "Total Bookings", value: data.totalBookings, icon: assets.listIconColored },
    { title: "Pending Bookings", value: data.pendingBookings, icon: assets.cautionIconColored },
    { title: "Completed Bookings", value: data.completedBookings, icon: assets.listIconColored },
  ];

  const fetchDashboardData = async () => {
    try {
      const { data: response } = await axios.get("/api/owner/dashboard");
      if (response.success) {
        setData({
          totalCars: response.dashboardData.totalCars,
          totalBookings: response.dashboardData.totalBookings,
          pendingBookings: response.dashboardData.pendingBookings,
          completedBookings: response.dashboardData.completeBookings,
          recentBookings: response.dashboardData.recentBookings,
          monthlyRevenue: response.dashboardData.monthlyRevenue,
        });
        toast.success("Dashboard updated successfully!");
        localStorage.removeItem("dashboardCleared");
      }
    } catch (error) {
      console.error("Dashboard fetch error:", error.message);
      toast.error("Failed to update dashboard.");
    }
  };

  const clearDashboardData = () => {
    setData({
      totalCars: 0,
      totalBookings: 0,
      pendingBookings: 0,
      completedBookings: 0,
      recentBookings: [],
      monthlyRevenue: 0,
    });
    localStorage.setItem("dashboardCleared", "true");
    toast("Dashboard cleared", { icon: "🗑️" });
  };

  useEffect(() => {
    if (user && isOwner) {
      if (localStorage.getItem("dashboardCleared") !== "true") {
        fetchDashboardData();
      }
    }
  }, [user, isOwner]);

  if (loading || user === null) {
    return (
      <div className="flex items-center justify-center h-full py-20">
        <p className="text-lg font-medium">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      <Title
        title="CarTrade Owner Dashboard"
        subTitle="Monitor total cars, bookings, revenue, and recent booking activities"
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

      {/* Recent Bookings + Monthly Revenue + Clear Data Button */}
      <div className="flex flex-wrap items-start gap-6 mb-6 w-full">
        {/* Recent Bookings */}
        <div className="p-4 md:p-6 border border-borderColor rounded-md max-w-lg w-full">
          <h1 className="text-lg font-medium">Recent Bookings</h1>
          <p className="text-gray-500">Latest car bookings on CarTrade</p>
          {data.recentBookings.length === 0 ? (
            <p className="mt-4 text-gray-500">
              {localStorage.getItem("dashboardCleared") === "true"
                ? "Dashboard is cleared."
                : "No recent bookings available."}
            </p>
          ) : (
            data.recentBookings.map((booking, index) => (
              <div
                key={booking._id || index}
                className="mt-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <img src={assets.listIconColored} alt="" className="h-5 w-5" />
                  </div>
                  <div>
                    <p>
                      {booking.car?.brand || "N/A"} {booking.car?.model || ""}
                    </p>
                    <p className="text-sm text-gray-500">
                      {booking.createdAt?.split("T")[0] || "N/A"} | {booking.city || "Unknown City"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <p className="text-sm text-gray-500">
                    {currency}{booking.price || 0}
                  </p>
                  <p className="px-3 py-0.5 border border-borderColor rounded-full text-sm">
                    {booking.status || "N/A"}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Monthly Revenue + Clear Data Button (fixed right) */}
        <div className="flex flex-col w-full md:max-w-xs">
          <div className="p-4 md:p-6 mb-6 border border-borderColor rounded-md">
            <h1 className="text-lg font-medium">Monthly Revenue from Bookings</h1>
            <p className="text-gray-500">Revenue for current month</p>
            <p className="text-3xl mt-6 font-semibold text-primary">
              {currency}{data.monthlyRevenue || 0}
            </p>
          </div>
          <div className="mb-10 flex justify-end">
            <button
              onClick={clearDashboardData}
              className="px-6 py-4 bg-blue-500 text-white text-xl rounded-md hover:bg-blue-600 transition"
            >
              Clear Data
            </button>
          </div>
        </div>
      </div>

      {/* Refresh Dashboard button */}
      <div className="w-full md:max-w-xs mb-10">
        <button
          onClick={fetchDashboardData}
          className="w-full px-6 py-4 bg-primary text-white text-xl rounded-md hover:bg-primary/90 transition"
        >
          Refresh Dashboard
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
