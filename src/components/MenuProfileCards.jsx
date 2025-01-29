import React from "react";
import { useNavigate } from "react-router-dom";

const MenuProfileCards = ({ userType }) => {
  const navigate = useNavigate();

  const cards =
    userType === "Chief"
      ? [
          { title: "Team Shifts", color: "bg-blue-600" },
          { title: "Team Schedule", color: "bg-blue-500" },
          { title: "Your Team", color: "bg-blue-400" },
        ]
      : [
          {
            title: "My Shifts",
            color: "bg-blue-400",
            route: "/ShiftApprovalPage",
          },
        ];

  const handleCardClick = (route) => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-10 p-4">
      {cards.map((card, index) => (
        <div key={index}>
          <div
            onClick={() => handleCardClick(card.route)}
            className={`p-4 text-center text-white font-bold rounded-lg shadow-md ${card.color}`}
          >
            {card.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuProfileCards;
