import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Certifique-se de que está incluindo todos os arquivos JSX
  theme: {
    extend: {
      // Aqui você pode adicionar outras personalizações, se necessário
    },
  },
  darkMode: "class", // Garante que o Tailwind usará a classe "dark" no body para ativar o modo escuro
  plugins: [daisyui],
};
