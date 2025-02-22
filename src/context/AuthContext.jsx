import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const updateUser = (userData) => {
    const newUser = userData ? { ...userData } : null;
    setUser(newUser);
    setIsAuthenticated(!!userData);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const clearUser = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (token && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        updateUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error to parsing user from localStorage:", error);
        clearUser();
        setIsAuthenticated(false);
      }
    } else {
      clearUser();
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, updateUser, clearUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
