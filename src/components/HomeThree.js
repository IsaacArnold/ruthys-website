import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const HomeThree = () => {
  return (
    <section className="home-three-grid content-container">
      <div className="home-three-content">
        <h2>Need catering or a function venue? We've got you covered!</h2>
        <p>
          With our spacious dining area, Ruthy's is the perfect place for you to
          host your next function.
        </p>
      </div>
      <StaticImage
        src="../images/function-two.jpeg"
        alt="Image of function room set up for a baby shower"
        className="home-three-img"
        placeholder="blurred"
        layout={"fullWidth"}
      />
      <Link to="catering" className="primary-btn">
        Find out more
      </Link>
    </section>
  );
};

export default HomeThree;
