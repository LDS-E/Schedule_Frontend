/* import { createContext, useContext, useState, useEffect } from "react";

// 1. Criação do Contexto para o Tema
const ThemeContext = createContext();

// 2. Criação do Hook customizado para acessar o contexto
export const useTheme = () => {
  return useContext(ThemeContext);
};

// 3. Componente ThemeProvider que envolve o restante da aplicação
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 4. Efeito para carregar o tema inicial do localStorage ao inicializar
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.body.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  // 5. Função para alternar entre os temas
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
*/
