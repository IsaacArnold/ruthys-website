import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import HomeTwo from "../components/HomeTwo";
import HomeThree from "../components/HomeThree";
import HomeFour from "../components/HomeFour";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <Hero />
      <HomeTwo />
      <HomeThree />
      <HomeFour />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;
