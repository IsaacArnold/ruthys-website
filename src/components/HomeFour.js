import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const HomeFour = () => {
  return (
    <section className="home-four-grid content-container">
      <div className="home-four-content">
        <h2>Come in, relax and enjoy Ruthy's Cafe & Eatery</h2>
        <p>
          Our friendly staff would love to welcome you into our beautiful
          Tauranga cafe. Come and experience the Ruthy's hospitality everyone
          raves about. Grab a scone, a flat white and enjoy life's simple
          pleasures.
        </p>
        <p>See you soon!</p>
      </div>
      <StaticImage
        src="../images/food.jpeg"
        alt="Image of banana scones"
        className="home-four-img"
        placeholder="blurred"
        layout={"fullWidth"}
      />
      <Link to="menus" className="primary-btn">
        Find out more
      </Link>
    </section>
  );
};

export default HomeFour;
