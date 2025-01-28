import React from "react";
import { useNavigate } from "react-router-dom"; // Importando o useNavigate

const MenuProfileCards = ({ userType }) => {
  const navigate = useNavigate(); // Hook para navegação programática

  // Define os cards com base no tipo de usuário
  const cards =
    userType === "Chief"
      ? [
          { title: "Weekly Shift", color: "bg-blue-400" },
          { title: "Team Shifts", color: "bg-blue-600" },
          { title: "Your Team", color: "bg-blue-400" },
          { title: "Request Time Off", color: "bg-green-600" },
          { title: "Vacation Track", color: "bg-green-600" },
          { title: "Sick Time Track", color: "bg-red-400" },
        ]
      : [
          {
            title: "My Shifts",
            color: "bg-blue-400",
            route: "/ShiftApprovalPage",
          }, // Redireciona para a página de aprovação de turnos
          { title: "Weekly Shift", color: "bg-blue-400" },
          { title: "Monthly Shift", color: "bg-blue-600" },
          { title: "Request Time Off", color: "bg-green-600" },
          { title: "Request Vacation", color: "bg-green-600" },
        ];

  // Função que vai navegar para a página de aprovação de turnos
  const handleCardClick = (route) => {
    if (route) {
      navigate(route); // Navega para a rota desejada (no caso, "/shift-approval")
    }
  };

  return (
    <div className="grid grid-cols-2 gap-10 p-4">
      {cards.map((card, index) => (
        <div key={index}>
          <div
            onClick={() => handleCardClick(card.route)} // Chama a função handleCardClick ao clicar no card
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
