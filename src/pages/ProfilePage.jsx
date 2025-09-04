import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { axios, user: loggedUser } = useAppContext();
  const [user, setUser] = useState({ name: "", email: "", image: "", joinedAt: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", image: "" });

  // Fetch user profile from backend
  const fetchUserProfile = async () => {
    try {
      const { data } = await axios.get("/api/users/me");
      if (data.success) {
        setUser(data.user);
        setFormData({
          name: data.user.name,
          email: data.user.email,
          image: data.user.image || "",
        });
      } else {
        toast.error(data.message || "Failed to fetch profile");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error fetching profile");
    }
  };

  useEffect(() => {
    if (loggedUser) fetchUserProfile();
  }, [loggedUser]);

  // Save changes to backend
  const handleSave = async () => {
    try {
      const { data } = await axios.put("/api/users/me", formData);
      if (data.success) {
        setUser(data.user);
        setIsEditing(false);
        toast.success("Profile updated successfully");
      } else {
        toast.error(data.message || "Failed to update profile");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error updating profile");
    }
  };

  // Fallback initials if no avatar
  const getInitials = (name) => {
    return name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-6 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">My Profile</h1>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full shadow-md transition-all"
          >
            Edit Profile
          </button>
        </div>

        {/* Profile Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-2xl font-bold text-white overflow-hidden">
            {user.image ? (
              <img src={user.image} alt="User Avatar" className="w-full h-full object-cover" />
            ) : (
              <span>{getInitials(user.name)}</span>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 space-y-5">
            <div>
              <h2 className="text-gray-500 text-sm">Full Name</h2>
              <p className="text-lg font-medium text-gray-800">{user.name}</p>
            </div>
            <div>
              <h2 className="text-gray-500 text-sm">Email Address</h2>
              <p className="text-lg font-medium text-gray-800">{user.email}</p>
            </div>
            <div>
              <h2 className="text-gray-500 text-sm">Member Since</h2>
              <p className="text-lg font-medium text-gray-800">
                {new Date(user.joinedAt).toLocaleString("default", { month: "long", year: "numeric" })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Image URL</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
