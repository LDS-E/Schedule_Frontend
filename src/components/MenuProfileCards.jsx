import React from "react";
import { useNavigate } from "react-router-dom"; // Importando o useNavigate

const MenuProfileCards = ({ userType }) => {
  const navigate = useNavigate(); // Hook para navegação programática

  // Define os cards com base no tipo de usuário
  const cards =
    userType === "Chief"
      ? [
          { title: "Team Shifts", color: "bg-blue-600" }, // forget now
          { title: "Team Schedule", color: "bg-blue-500" }, // navigate to calendarchief
          { title: "Your Team", color: "bg-blue-400" },
        ]
      : [
          {
            title: "My Shifts",
            color: "bg-blue-400",
            route: "/ShiftApprovalPage",
          },
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
