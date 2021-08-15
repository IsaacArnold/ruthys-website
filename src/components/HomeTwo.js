import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const HomeTwo = () => {
  return (
    <section className="home-two-grid content-container">
      <div className="home-two-content">
        <h2>Great coffee, Nana's muffins and great yarns...</h2>
        <p>
          Ruthy's was founded in 2020 with the goal of bringing the local
          community quality espresso and delicious cafe-style food.
        </p>
        <p>
          With our home-style eats and warm banter, you'll struggle to find a
          better start to your day than with a coffee and scone from the team at
          Ruthy's
        </p>
        <Link to="menus" className="primary-btn laptop-home-two-btn">
          Explore our menus
        </Link>
      </div>
      <StaticImage
        src="../images/banana-scones.jpeg"
        alt="Image of banana scones"
        className="home-two-img"
        placeholder="blurred"
        layout={"fullWidth"}
      />
      <Link to="menus" className="primary-btn home-two-btn">
        Explore our menus
      </Link>
    </section>
  );
};

export default HomeTwo;
