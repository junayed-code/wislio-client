import daisyui from "daisyui";
import themes from "daisyui/src/theming/themes";

const lightTheme = themes["[data-theme=light]"];

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["EB Garamond", "serif"],
      },
    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        light: {
          ...lightTheme,
          primary: "#1FEA5C",
          "primary-content": "#084418",
          secondary: "#F4D35E",
          "secondary-content": "#4A4015",
          neutral: "#433A3F",
          "neutral-content": "#E1DEC1",
          "base-100": "#FCFCFC",
          "base-content": "#0B0500",
          "--rounded-btn": "0.375rem",
          "--rounded-box": "none",
          "--btn-text-case": "none",
        },
      },
      {
        dark: {
          ...lightTheme,
          primary: "#1FEA5C",
          "primary-content": "#084418",
          secondary: "#F4D35E",
          "secondary-content": "#4A4015",
          neutral: "#433A3F",
          "neutral-content": "#E1DEC1",
          "base-100": "#FCFCFC",
          "base-content": "#0B0500",
          "--rounded-btn": "0.375rem",
          "--rounded-box": "none",
          "--btn-text-case": "none",
        },
      },
    ],
  },
};
