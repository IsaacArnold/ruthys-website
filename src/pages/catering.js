import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

import "../styles/normalize.css";
import "../styles/styles.scss";
import "../styles/catering.scss";

const Catering = () => {
  return (
    <Layout>
      <Seo
        title="Ruthy's Catering & Functions"
        description="Catering and functions page description"
      />
      <section className="catering-grid content-container">
        <div className="catering-content">
          <h1>Ruthy's Catering & Functions</h1>
          <p>
            Ruthy's was founded in 2020 with the goal of bringing the local
            community quality espresso and delicious cafe-style food.
          </p>
          <div className="laptop-catering-btn-container">
            <Link to="/catering" className="primary-btn laptop-catering-btn">
              View our catering menu
            </Link>
            <Link to="/contact" className="primary-btn laptop-catering-btn">
              Discuss a function
            </Link>
          </div>
        </div>
        <StaticImage
          src="../images/function.jpeg"
          alt="Image of chocolate cookies on a baking tray"
          className="catering-img"
          placeholder="blurred"
          layout={"fullWidth"}
        />
        <Link to="/catering" className="primary-btn catering-btn">
          View our catering menu
        </Link>
        <Link to="/contact" className="primary-btn catering-btn">
          Discuss a function
        </Link>
      </section>
    </Layout>
  );
};

export default Catering;
