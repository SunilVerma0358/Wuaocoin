/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        borderrounded: "borderrounded 6s linear infinite  ",
        footerLogo: "footerLogo 6s linear infinite",
        whitePaper: "whitePaper 6s linear infinite",
        Roadmap: "Roadmap 6s linear infinite",
        loader: "loader 4s linear infinite",
      },
      keyframes: {
        Roadmap: {
          "0%": {
            "transform ": "translateX(0)",
          },
          "50%": {
            "transform ": "translateX(5%)",
          },
          "100%": {
            "transform ": "translateX(0)",
          },
        },
        loader: {
          "0%": { transform: "scale(100%)" },
          "50%": { transform: "scale(110%)" },
          "100%": { transform: "scale(100%)" },
        },
        borderrounded: {
          "0%": { "border-radius": "36% 64% 53% 47% / 60% 38% 62% 40% " },
          "25%": { "border-radius": "77% 23% 35% 65% / 68% 66% 34% 32%" },
          "50%": { "border-radius": "60% 40% 41% 59% / 68% 66% 34% 32% " },
          "75%": { "border-radius": "30% 70% 32% 68% / 73% 66% 34% 27% " },
          "100%": { "border-radius": "36% 64% 53% 47% / 60% 38% 62% 40% " },
        },
        footerLogo: {
          "0%": { "transform ": "rotate(360deg)" },
          "100%": { "transform ": "rotate(0deg)" },
        },
        whitePaper: {
          "0%": { "transform ": "translateY(0)" },
          "50%": { "transform ": "translateY(-05%)" },
          "100%": { "transform ": "translateY(0)" },
        },
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        borderBg: ["40% 60% 31% 69% / 58% 53% 47% 42% "],
      },
      backgroundImage: {
        heroGradient: [
          "linear-gradient(180deg, #FFBA3B -9.01%, #FFA53B 43.37%, #FF983B 89.55%)",
        ],
        ButtonText: [
          "linear-gradient(180deg, #FFBA3B -9.01%, #FFA53B 43.37%, #FF983B 89.55%)",
        ],
        yellowGradient: ["linear-gradient(0deg, #EFB93B 0%, #EFB93B 100%)"],

        redGradient: ["linear-gradient(0deg, #E0480A 0%, #E0480A 100%)"],
        parpalGradient: ["linear-gradient(0deg, #6A3DAD 0%, #6A3DAD 100%)"],
        pinkGradient: ["linear-gradient(0deg, #ED5C83 0%, #ED5C83 100%)"],
      },
    },
  },
  plugins: [],
};
