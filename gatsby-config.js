module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-react-svg",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Ruthy's Coffe Bar & Eatery",
        short_name: "Ruthy's Cafe",
        start_url: "/",
        lang: "en",
        background_color: "#1a342a",
        theme_color: "#1a342a",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
  ],
  siteMetadata: {
    title: `Ruthy's Coffee Bar & Eatery | Tauranga Cafe`,
    titleTemplate: "%s | Ruthy's Coffee Bar & Eatery Tauranga",
    description: `Ruthy's Coffee Bar & Eatery is a popular Tauranga Cafe located in Tauriko. Open for breakfast and lunch serving delicious cabinet and kitchen food with amazing Excelso espresso.`,
    siteUrl: `https://ruthyscafe.netlify.app/`,
    image: "src/images/people.jpeg",
  },
};
