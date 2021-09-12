import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import "../styles/normalize.css";
import "../styles/styles.scss";
import "../styles/catering.scss";

const Catering = () => {
  return (
    <Layout>
      <SEO
        title="Ruthy's Catering & Functions"
        description="Need your next event catered? What about a space to hold your next function? Ruthy's has you covered. Explore our catering and function options today!"
      />
      <section className="catering-grid content-container">
        <div className="catering-content">
          <h1>Ruthy's Catering & Functions</h1>
          <p>
            Ruthy's offer a range of delicious catering options. Our dedicated
            in-house chefs source the freshest local ingredients and can cater
            to any dietry requirements.
          </p>
          <p>
            In addition, our spacious dining area is perfect to host your next
            function. Our space can be used for events such as baby showers,
            large team meetings, birthday parties or other special ocassions.
            Let the Ruthy's team take care of everything from venue set-up to
            catering.
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
