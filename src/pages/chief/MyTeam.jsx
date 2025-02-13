import React, { useEffect, useState } from "react";
import usersData from "../../data/users.json";

const MyTeam = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(usersData);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[30deg] top-20 left-20"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[45deg] top-40 left-60"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[60deg] top-10 right-40"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[85deg] top-30 right-80"></div>
      </div>

      {/* Page display */}
      <div className="container mx-auto p-4 flex-grow">
        <h1 className="text-3xl font-bold text-center mb-6">My Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="card bg-base-100 shadow-xl p-4 flex flex-col items-center"
            >
              {/* Avatar */}
              <img
                src={
                  user.avatar ||
                  (user.gender === "female"
                    ? "./src/avatars/2.png"
                    : "./src/avatars/1.png")
                }
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
              />

              {/* Users details */}
              <div className="text-center mt-4 w-full">
                <h2 className="card-title text-lg font-semibold">
                  {user.name}
                </h2>
                <p className="text-gray-500 text-sm">
                  {user.nurseType} - {user.department}
                </p>
                <p className="text-gray-400 text-sm">{user.institution}</p>
                <p className="text-xs text-gray-500 break-words w-full px-2">
                  {user.email}
                </p>
              </div>

              {/* Button */}
              <div className="mt-auto w-full flex justify-center">
                <button className="btn btn-primary btn-sm w-3/4">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
