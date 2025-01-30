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
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(card.route)}
          className="card w-72 bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <div className={`card-body ${card.color} text-white rounded-xl`}>
            <h2 className="card-title">{card.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuProfileCards;
