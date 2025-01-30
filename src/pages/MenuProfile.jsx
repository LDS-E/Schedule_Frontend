import React from "react";
import MenuProfileCards from "../components/MenuProfileCards";
import MainHeader from "../components/MainHeader";

const MenuProfile = ({ userType, userData }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <MainHeader userData={userData} />

      <div className="flex-grow content-center">
        <MenuProfileCards userType={userType} />
      </div>
    </div>
  );
};

export default MenuProfile;
