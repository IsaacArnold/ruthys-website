import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Scrollwheel from "../images/svg/scrollwheel.svg";

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-grid">
        <StaticImage
          src="../images/people.jpeg"
          alt="Image of people laughing and sipping coffee inside Ruthy's Cafe Tauranga"
          className="hero-img"
          placeholder="blurred"
        />
        <div className="hero-content content-container">
          <div className="hero-content-txt">
            <h1>
              Welcome to Ruthy's! Tauranga's favourite cafe located in Tauriko.
            </h1>
          </div>
          <div className="scrollwheel">
            <Scrollwheel className="scrollwheel-icon" />
            <p>Scroll to learn more</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
