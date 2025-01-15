import React, { useState } from "react";

const RegisterChief = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contractDetail: "",
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
      <div className="w-full max-w-4xl bg-gray-200 p-8 rounded-lg shadow-md">
        <h2 className="text-center text-lg font-semibold text-gray-700 mb-6">
          Chief Profile
        </h2>
        <table className="w-full">
          <tbody>
            <tr>
              <td className="p-4 align-top">
                <div className="flex flex-col items-center">
                  <div className="w-36 h-36 bg-gray-300 mb-4 rounded-full flex items-center justify-center text-gray-500">
                    User Image
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Upload Image
                  </button>
                </div>
              </td>
              <td className="p-4 align-top">
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="name"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="contractDetail"
                    >
                      Contract Detail:
                    </label>
                    <input
                      type="text"
                      id="contractDetail"
                      name="contractDetail"
                      value={formData.contractDetail}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="gender"
                    >
                      Gender:
                    </label>
                    <input
                      type="text"
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="phoneNumber"
                    >
                      Phone Number:
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="address"
                    >
                      Address:
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="medicalId"
                    >
                      Medical ID:
                    </label>
                    <input
                      type="text"
                      id="medicalId"
                      name="medicalId"
                      value={formData.medicalId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end space-x-4 mt-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Edit
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Update
          </button>
        </div>
        <button className="w-full mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Schedule your team (chief nurse)
        </button>
      </div>
    </div>
  );
};

export default RegisterChief;
