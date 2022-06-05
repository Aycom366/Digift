module.exports = {
  content: ["./index.html", "./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      boxShadow: {
        custom: "0px 1px 0px #F5F7FA",
        happiness: "0px 12px 0px #5CA5FF",
      },
      gridTemplateColumns: {
        responsive: "2fr 1fr",
      },
      backgroundImage: {
        "footer-bg": 'url("/src/assets/images/polygon.png")',
        "custom-shadow": "linear-gradient(180deg, #0073F5 0%, #006BE0 100%)",
        "landing-mesh": "url(/src/assets/images/mesh_landing.png)",
        left_image: "url(/src/assets/images/amazon_landing.png)",
        right_image: "url(/src/assets/images/card_landing.png)",
        happiness_image: "url(/src/assets/images/create.png)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
