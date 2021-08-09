import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const HomeTwo = () => {
  return (
    <section className="home-two-grid content-container">
      <div className="home-two-content">
        <h2>Modern cafe dining with a tradtional twist...</h2>
        <p>
          Ruthy's was founded in 2020 with the goal of bringing the local
          community quality espresso and delicious cafe-style food.
        </p>
      </div>
      <StaticImage
        src="../images/banana-scones.jpeg"
        alt="Image of banana scones"
        className="home-two-img"
        placeholder="blurred"
        layout={"fullWidth"}
      />
      <Link to="menus" className="primary-btn">
        Explore our menus
      </Link>
    </section>
  );
};

export default HomeTwo;
