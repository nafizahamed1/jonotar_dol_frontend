export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#b91c1c",   // political red
        secondary: "#1e3a8a", // trust blue
        dark: "#0f172a",      // deep text
        light: "#f8fafc",     // background
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        strong: "0 20px 40px rgba(0,0,0,0.15)",
      },

      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },

  plugins: [],
};

