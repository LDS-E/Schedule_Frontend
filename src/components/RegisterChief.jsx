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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#ccc",
      }}
    >
      <h2>Chief Profile</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <div>
          <div
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "#eee",
              marginBottom: "10px",
            }}
          >
            User Image
          </div>
          <button
            style={{
              padding: "10px",
              backgroundColor: "#4A2EBB",
              color: "white",
              border: "none",
            }}
          >
            Upload Image
          </button>
        </div>
        <div style={{ flexGrow: 1, marginLeft: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Contract Detail:</label>
            <input
              type="text"
              name="contractDetail"
              value={formData.contractDetail}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Gender:</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Medical ID:</label>
            <input
              type="text"
              name="medicalId"
              value={formData.medicalId}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                padding: "10px",
                backgroundColor: "#4A2EBB",
                color: "white",
                border: "none",
              }}
            >
              Edit
            </button>
            <button
              style={{
                padding: "10px",
                backgroundColor: "#4A2EBB",
                color: "white",
                border: "none",
              }}
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <button
        style={{
          padding: "10px",
          backgroundColor: "#28A745",
          color: "white",
          border: "none",
          marginTop: "20px",
        }}
      >
        Schedule your team (chief nurse)
      </button>
    </div>
  );
};

export default RegisterChief;
