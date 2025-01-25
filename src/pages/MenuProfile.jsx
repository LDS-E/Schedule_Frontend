import React from "react";
import MenuProfileHeader from "../components/MenuProfileHeader";
import MenuProfileCards from "../components/MenuProfileCards";
import MenuProfileFooter from "../components/MenuProfileFooter";

const MenuProfile = ({ userType, userData }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <MenuProfileHeader userData={userData} />

      {/* Card Menu */}
      <div className="flex-grow content-center">
        <MenuProfileCards userType={userType} />
      </div>

      {/* Footer */}
      <MenuProfileFooter />
    </div>
  );
};

export default MenuProfile;
