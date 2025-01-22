import { useNavigate } from "react-router-dom";

const MenuProfileHeader = ({ userData }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/LogIn");
  };

  return (
    <div className="flex justify-between items-center bg-blue-500 text-white py-4 px-6 shadow-md">
      {/* Avatar e Informações */}
      <div className="flex items-center">
        <img
          src={userData.avatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="text-sm font-semibold">{userData.name}</p>
          <p className="text-xs">{userData.institution}</p>
        </div>
      </div>

      {/* Logout Button */}
      <button
        className="bg-red-500 px-3 py-1 rounded-md text-white hover:bg-red-600"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default MenuProfileHeader;
