import React, { useState } from "react";

const RegisterRegularJumper = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    address: "",
    medicalId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    alert("Profile updated successfully!");
    // Add logic for form submission or API call here.
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="w-full max-w-md bg-gray-200 p-8 rounded-lg shadow-md">
        <h2 className="text-center text-lg font-semibold text-gray-700 mb-6">
          Regular Jumper Profile
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Upload Section */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 bg-gray-300 rounded-md flex items-center justify-center mb-4">
              <span className="text-sm text-gray-500">User Image</span>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Upload Image
            </button>
          </div>
          {/* Form Section */}
          <div className="flex-grow">
            <table className="w-full">
              <tbody>
                <tr className="mb-4">
                  <td className="pr-4">
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="name"
                    >
                      Name:
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </td>
                </tr>
                <tr className="mb-4">
                  <td className="pr-4">
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                  </td>
                  <td>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </td>
                </tr>
                <tr className="mb-4">
                  <td className="pr-4">
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="gender"
                    >
                      Gender:
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </td>
                </tr>
                <tr className="mb-4">
                  <td className="pr-4">
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="phoneNumber"
                    >
                      Phone Number:
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </td>
                </tr>
                <tr className="mb-4">
                  <td className="pr-4">
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="address"
                    >
                      Address:
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </td>
                </tr>
                <tr className="mb-4">
                  <td className="pr-4">
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="medicalId"
                    >
                      Medical ID:
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="medicalId"
                      name="medicalId"
                      value={formData.medicalId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                Edit
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterRegularJumper;
