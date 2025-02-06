import React, { useEffect, useState } from "react";
import usersData from "../data/users.json";

const MyTeamPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(usersData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">My Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        {users.map((user) => (
          <div key={user.id} className="card glass w-96 shadow-xl">
            <figure>
              <div className="w-35 rounded-xll">
                <img
                  src={
                    user.avatar ||
                    (user.gender === "female"
                      ? "./src/avatars/2.png"
                      : "./src/avatars/1.png")
                  }
                  alt={user.name}
                  className="w-full h-48 object-cover"
                />
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p className="text-gray-400">
                {user.nurseType} - {user.department}
              </p>
              <p className="text-gray-300">{user.institution}</p>
              <p className="text-sm text-gray-200">{user.email}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeamPage;
