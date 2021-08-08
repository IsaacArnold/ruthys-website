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
  ],
  siteMetadata: {
    title: `Ruthy's Cafe & Eatery | Tauranga Cafe`,
    titleTemplate: "%s | Ruthy's Cafe & Eatery Tauranga",
    description: `Ruthy's Cafe & Eatery is a popular Tauranga Cafe located in Tauriko. Open for breakfast and lunch serving delicious cabinet and kitchen food with amazing Excelso espresso.`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
};
