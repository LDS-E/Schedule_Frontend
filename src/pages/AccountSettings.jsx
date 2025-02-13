import React, { useState } from "react";

const AccountSettings = ({ currentUser }) => {
  const [formData, setFormData] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    contractDetail: currentUser?.contractDetail || "",
    gender: currentUser?.gender || "",
    phoneNumber: currentUser?.phoneNumber || "",
    address: currentUser?.address || "",
    medicalId: currentUser?.medicalId || "",
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleSubmit = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 p-4">
      <div className="card w-full max-w-4xl bg-base-100 shadow-xl p-6">
        <h2 className="text-center text-xl font-semibold mb-4 text-primary">
          Account Settings
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar e Upload */}
          <div className="flex flex-col items-center">
            <div className="avatar">
              <div className="w-36 h-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500 bg-base-300">
                    No Image
                  </div>
                )}
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input file-input-bordered file-input-primary mt-4"
            />
          </div>

          {/* Formulário */}
          <div className="flex-1 w-full">
            <div className="flex flex-wrap gap-4">
              {Object.keys(formData).map((key) => (
                <div key={key} className="flex-1 min-w-[45%]">
                  <label className="label">
                    <span className="label-text">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </span>
                  </label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Botões */}
        <div className="flex justify-end gap-4">
          <button className="btn btn-outline btn-primary">Edit</button>
          <button onClick={handleSubmit} className="btn btn-primary">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
