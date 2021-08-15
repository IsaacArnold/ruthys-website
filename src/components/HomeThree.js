import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const HomeThree = () => {
  return (
    <section className="home-three-grid content-container">
      <div className="home-three-content">
        <h2>Need catering or a function venue? We've got you covered!</h2>
        <p>
          With our spacious dining area, Ruthy's is the perfect place to host
          your next function. Our in-house bakers and chefs can also provide
          food for your off-site event with our extensive catering menu.
        </p>
        <Link to="catering" className="primary-btn laptop-home-three-btn">
          Find out more
        </Link>
      </div>
      <StaticImage
        src="../images/function-two.jpeg"
        alt="Image of function room set up for a baby shower"
        className="home-three-img"
        placeholder="blurred"
        layout={"fullWidth"}
      />
      <Link to="catering" className="primary-btn home-three-btn">
        Find out more
      </Link>
    </section>
  );
};

export default HomeThree;
