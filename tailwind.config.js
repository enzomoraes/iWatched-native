/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF', // Azul principal para header e ícones
        background: '#F5F5F5', // Cor de fundo clara
        text: '#333333', // Texto principal
        subtext: '#666666', // Subtítulo ou texto auxiliar
        //card: '#F5F5F5', // Cor dos cards (branca)
        icon: '#A0AEC0', // Ícones
        accent: '#FF4500', // Acento para botões ou destaques (vermelho leve)
      },
    },
  },
  presets: [require('nativewind/preset')],
};
