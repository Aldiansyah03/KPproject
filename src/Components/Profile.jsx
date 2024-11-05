import { useState } from "react";

const Profile = () => {
  const [user] = useState({
    name: "Muhammad Aldiansyah",
    email: "aldiansyah@gmail.com",
    avatar: "src/assets/profile.svg",
    date: "1 month ago",
  });

  return (
    <div className="p-6 sm:p-10 bg-gray-100 min-h-screen">
      {/* Welcome Section */}
      <div className="text-left mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Welcome, Aldiansyah</h1>
        <p className="text-gray-500">Tue, 06 June 2024</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Cover Photo */}
        <div className="h-32 sm:h-40 bg-gradient-to-r from-blue-800 to-black"></div>

        {/* Profile Info */}
        <div className="p-6 -mt-12 relative bg-white rounded-b-lg">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
            {/* Avatar and Name */}
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-white -mt-12"
              />
              <div className="text-center sm:text-left mt-4 sm:mt-0">
                <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </div>
            {/* Edit Button */}
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md shadow mt-4 sm:mt-0 hover:bg-blue-600">
              Edit
            </button>
          </div>

          {/* Form Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-gray-600 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Your First Name"
                className="w-full border rounded-md px-4 py-2 text-gray-700 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Nick Name</label>
              <input
                type="text"
                placeholder="Your Nickname"
                className="w-full border rounded-md px-4 py-2 text-gray-700 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Gender</label>
              <select className="w-full border rounded-md px-4 py-2 text-gray-700 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="text"
                placeholder="Your Email"
                className="w-full border rounded-md px-4 py-2 text-gray-700 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
