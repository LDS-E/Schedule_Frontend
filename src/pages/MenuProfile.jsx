import React from "react";
import MenuProfileCards from "../components/MenuProfileCards";
import MainHeader from "../components/MainHeader";

const MenuProfile = ({ userType, userData }) => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col">
      {/* MainHeader with proper z-index */}
      <div className="relative z-10">
        <MainHeader userData={userData} />
      </div>

      {/* Background Patterns */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[30deg] top-20 left-20"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[45deg] top-40 left-60"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[60deg] top-10 right-40"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[85deg] top-30 right-80"></div>
      </div>

      {/* Cards Section */}
      <div className="relative flex-grow z-10 flex flex-col justify-center items-center">
        <MenuProfileCards userType={userType} />
      </div>
    </div>
  );
};

export default MenuProfile;
