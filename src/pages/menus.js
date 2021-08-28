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
      <Seo
        title="Ruthy's Menus"
        description="Explore our delicious cafe and catering menus. We can cater to most dietery requirements. "
      />
      <section className="menus-grid content-container">
        <div className="menus-content">
          <h1>Menus</h1>
          <p>
            Ruthy's is all about bringing family cooking into the cafe. We bake
            our muffins, scones, slices and cakes from scratch - just like Nana
            used to.
          </p>
          <p>
            Whether you are after breakfast, brunch or just a sneaky treat,
            Ruthy's has you covered. Come in grab a coffee and a scone - we are
            all about enjoying life's simple pleasures!
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
