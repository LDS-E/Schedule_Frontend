import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuProfileCards from "../components/MenuProfileCards";
// Importe o MainHeader

const MenuProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Adicione o estado de erro

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token) {
      console.warn("Token não encontrado. Redirecionando...");
      navigate("/login");
      return;
    }

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && parsedUser.email) {
          setUser(parsedUser);
          setLoading(false);
          return; // Se o usuário já está no localStorage, não faz o fetch
        }
      } catch (error) {
        console.error("Erro ao parsear user do localStorage:", error);
        localStorage.removeItem("user"); // Se houver erro, limpa o localStorage
      }
    }

    // Faz a requisição ao backend se o user não estiver salvo localmente
    fetch("http://localhost:5000/api/users/menu-profile", {
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
            throw new Error(err.message || "Falha ao carregar dados do perfil");
          });
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data)); // Salva no localStorage
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar perfil:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [navigate]);

  if (loading) {
    return <div className="text-center mt-10">Carregando...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        Erro ao carregar perfil: {error}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center mt-10 text-red-500">
        Erro ao carregar usuário. Tente novamente.
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col">
      <div className="relative flex-grow z-10 flex flex-col justify-center items-center">
        <MenuProfileCards user={user} />
      </div>
    </div>
  );
};

export default MenuProfile;
