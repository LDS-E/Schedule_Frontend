import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterBasic = () => {
  const [userType, setUserType] = useState(""); // State to track user type
  const navigate = useNavigate(); // React Router's navigate function

  const handleRegister = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Navigate to the appropriate page based on the selected user type
    if (userType === "Regular" || userType === "Jumper") {
      navigate("/RegisterRegularJumper");
    } else if (userType === "Chief") {
      navigate("/RegisterChief");
    } else {
      alert("Please select a valid user type.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[url('./src/backgrounds/1.png')] bg-cover bg-center">
      <div className="w-[900px] bg-white/75 p-8 rounded-lg shadow-xl border-2 border-blue-700 relative">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold text-blue-900 mb-6">
          Creating your account
        </h2>

        <form onSubmit={handleRegister} className="flex gap-8">
          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 text-sm">
              No Image
            </div>
            <label className="relative">
              <input
                type="file"
                className="hidden"
                onChange={(e) => console.log(e.target.files[0])}
              />
              <span className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md cursor-pointer hover:bg-purple-700">
                Choose File
              </span>
            </label>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* E-mail */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Medical ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Medical ID
              </label>
              <input
                type="text"
                placeholder="Enter your medical ID"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <input
                type="text"
                placeholder="Enter your gender"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Nurse Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nurse Type
              </label>
              <input
                type="text"
                placeholder="Enter nurse type"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Contract Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contract Details
              </label>
              <input
                type="text"
                placeholder="Enter contract details"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <input
                type="text"
                placeholder="Enter department"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </form>

        {/* Submit Button */}
        <div className="absolute bottom-4 right-4">
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white text-sm font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterBasic;
