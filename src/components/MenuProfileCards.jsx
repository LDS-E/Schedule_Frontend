import React from "react";
import { useNavigate } from "react-router-dom";

const MenuProfileCards = ({ userType }) => {
  const navigate = useNavigate();

  const cards = [
    { title: "My Team Shifts", color: "bg-blue-500", route: "/TeamShiftsPage" },
    { title: "Schedule Plan", color: "bg-blue-500", route: "/ShiftScheduler" },
    { title: "My Team", color: "bg-blue-500", route: "/MyTeam" },
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex justify-center gap-12">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(card.route)}
            className="w-64 h-32 bg-white shadow-lg cursor-pointer hover:scale-105 transform duration-300"
          >
            <div
              className={`flex items-center justify-center h-full ${card.color} text-white rounded-xl`}
            >
              <h2 className="text-center text-lg font-bold">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuProfileCards;
