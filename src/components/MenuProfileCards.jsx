import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const MenuProfileCards = ({ user }) => {
  const navigate = useNavigate();

  // Pegamos o userType dentro do componente
  const userType = user?.userType || ""; // Evita erro se user for undefined

  const chiefCards = [
    {
      title: "Shift Scheduler",
      color: "bg-blue-500",
      route: "/ShiftScheduler",
    },
    { title: "My Team", color: "bg-blue-500", route: "/MyTeam" },
    { title: "Team Shifts", color: "bg-blue-500", route: "/TeamShifts" },
  ];

  const otherUserCards = [
    { title: "My Shifts", color: "bg-green-500", route: "/MyShifts" },
    { title: "Shift Approval", color: "bg-green-500", route: "/ShiftApproval" },
  ];

  // Escolhemos os cards com base no userType
  const cardsToDisplay = userType === "Chief" ? chiefCards : otherUserCards;

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex justify-center gap-12">
        {cardsToDisplay.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.route)}
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

// 🔹 Agora validamos `user` ao invés de `userType`
MenuProfileCards.propTypes = {
  user: PropTypes.shape({
    userType: PropTypes.string.isRequired, // userType é uma string obrigatória dentro do objeto user
  }).isRequired,
};

export default MenuProfileCards;
