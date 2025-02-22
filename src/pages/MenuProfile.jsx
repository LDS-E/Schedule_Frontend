import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuProfileCards from "../components/MenuProfileCards";

const MenuProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/api/users/me", {
      // Endpoint
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem("token");
            navigate("/login");
            return;
          }
          return response.json().then((err) => {
            throw new Error(err.message || "Failed to load profile data");
          });
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading profile:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [navigate]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        Error loading profile: {error}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center mt-10 text-red-500">
        Error loading user. Please try again.
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col">
      <div className="relative flex-grow z-10 flex flex-col justify-center items-center">
        <MenuProfileCards user={user} />{" "}
        {/* Passa o user para o MenuProfileCards */}
      </div>
    </div>
  );
};

export default MenuProfile;
