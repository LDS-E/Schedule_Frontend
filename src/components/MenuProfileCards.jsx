import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const MenuProfileCards = ({ user }) => {
  const navigate = useNavigate();

  const chiefCards = [
    {
      title: "Shift Scheduler",
      color: "bg-blue-500",
      route: "/ShiftScheduler",
    },
    { title: "My Team", color: "bg-blue-500", route: "/MyTeam" },
    { title: "Team Shifts", color: "bg-blue-500", route: "/TeamShifts" },
  ];

  const rnCards = [
    // Cards for RN
    { title: "My Shifts", color: "bg-green-500", route: "/MyShifts" },
    { title: "Shift Approval", color: "bg-green-500", route: "/ShiftApproval" },
  ];

  const lpnCards = [
    // Cards for LPN
    { title: "My Shifts", color: "bg-yellow-500", route: "/MyShifts" },
    { title: "Availability", color: "bg-yellow-500", route: "/Availability" },
  ];

  let cardsToDisplay = [];

  switch (user.userType) {
    case "Chief":
      cardsToDisplay = chiefCards;
      break;
    case "RN":
      cardsToDisplay = rnCards;
      break;
    case "LPN":
      cardsToDisplay = lpnCards;
      break;
    default:
      cardsToDisplay = [];
      console.warn("Tipo de usuário desconhecido:", user.userType);
  }

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

MenuProfileCards.propTypes = {
  user: PropTypes.shape({
    userType: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuProfileCards;
