import React from "react";

const MenuProfileCards = ({ userType }) => {
  // Define os cards com base no tipo de usuário
  const cards =
    userType === "Chief"
      ? [
          { title: "Log Weekly Shift", color: "bg-blue-400" },
          { title: "Employee Schedule Table", color: "bg-blue-400" },
          { title: "Assign Task", color: "bg-green-400" },
          { title: "Employee Task List", color: "bg-green-400" },
          { title: "Request Time Off", color: "bg-green-600" },
          { title: "Vacation Tracker", color: "bg-green-600" },
          { title: "Sick Time Track", color: "bg-red-500" },
          { title: "Quarantine Tracker", color: "bg-red-500" },
        ]
      : [
          { title: "View Schedule", color: "bg-blue-400" },
          { title: "Request Time Off", color: "bg-green-600" },
          { title: "Vacation Tracker", color: "bg-green-600" },
          { title: "Sick Time Track", color: "bg-red-500" },
        ];

  return (
    <div className="grid grid-cols-2 gap-10 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`p-4 text-center text-white font-bold rounded-lg shadow-md ${card.color}`}
        >
          {card.title}
        </div>
      ))}
    </div>
  );
};

export default MenuProfileCards;
