import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
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

    fetch("/api/users/profile", {
      // Ou a sua rota de perfil
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
          throw new Error("Falha ao carregar dados do perfil");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar perfil:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [navigate]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }
  if (!user) {
    return <div>Usuário não encontrado.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Perfil do Usuário</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-lg">
          <strong>Nome:</strong> {user.firstName} {user.lastName}
        </p>
        <p className="text-lg">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-lg">
          <strong>Tipo de Usuário:</strong> {user.userType}
        </p>
        {/* Adicione outros campos que você precisa exibir */}
      </div>
    </div>
  );
};

export default UserProfile;
