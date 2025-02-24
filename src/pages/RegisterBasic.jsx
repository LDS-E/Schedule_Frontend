import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterBasic = () => {
  const [formData, setFormData] = useState({
    email: "",
    medicalId: "",
    firstName: "",
    lastName: "",
    gender: "",
    password: "",
    country: "",
    city: "",
    street: "",
    zipCode: "",
    phoneNumber: "",
    userType: "",
    contractDetails: "",
    department: "",
    institution: "",
    dateOfBirth: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dateOfBirth: date });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[url('./src/backgrounds/1.png')] bg-cover bg-center">
      <div className="w-[900px] bg-white/75 p-8 rounded-lg shadow-xl border-2 border-blue-700 relative">
        <h2 className="text-center text-2xl font-bold text-blue-900 mb-6">
          Creating your account
        </h2>

        <form onSubmit={handleRegister} className="flex gap-8">
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

          <div className="grid grid-cols-2 gap-4 w-full">
            {Object.keys(formData).map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {key === "firstName"
                    ? "First Name"
                    : key === "lastName"
                    ? "Last Name"
                    : key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                {key === "gender" ? (
                  <select
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                ) : key === "userType" ? (
                  <select
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select User Type</option>
                    <option value="RN">RN</option>
                    <option value="LPN">LPN</option>
                    <option value="Chief">Chief</option>
                  </select>
                ) : key === "dateOfBirth" ? (
                  <input
                    type="date"
                    name={key}
                    value={
                      formData[key]
                        ? formData[key].toISOString().split("T")[0]
                        : ""
                    }
                    onChange={(e) => handleDateChange(new Date(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : key === "password" ? (
                  <input
                    type="password"
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                    placeholder={`Enter your ${key}`}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ) : (
                  <input
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                    placeholder={`Enter your ${key}`}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 right-4">
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white text-sm font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterBasic;
