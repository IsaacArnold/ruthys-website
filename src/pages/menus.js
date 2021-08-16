import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

import "../styles/normalize.css";
import "../styles/styles.scss";
import "../styles/menus.scss";

const Menus = () => {
  return (
    <Layout>
      <Seo title="Ruthy's Menus" description="Menu page description" />
      <section className="menus-grid content-container">
        <div className="menus-content">
          <h2>Menus</h2>
          <p>
            Ruthy's was founded in 2020 with the goal of bringing the local
            community quality espresso and delicious cafe-style food.
          </p>
          <div className="laptop-menus-btn-container">
            <Link to="/menus" className="primary-btn laptop-menus-btn">
              View our cafe menu
            </Link>
            <Link to="/menus" className="primary-btn laptop-menus-btn">
              View our catering menu
            </Link>
          </div>
        </div>
        <StaticImage
          src="../images/cookies.jpeg"
          alt="Image of chocolate cookies on a baking tray"
          className="menus-img"
          placeholder="blurred"
          layout={"fullWidth"}
        />
        <Link to="/menus" className="primary-btn menus-btn">
          View our cafe menu
        </Link>
        <Link to="/menus" className="primary-btn menus-btn">
          View our catering menu
        </Link>
      </section>
    </Layout>
  );
};

export default Menus;
