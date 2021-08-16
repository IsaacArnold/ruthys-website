import React from "react";
import { use100vh } from "react-div-100vh";
import { StaticImage } from "gatsby-plugin-image";
import Scrollwheel from "../images/svg/scrollwheel.svg";

const Hero = () => {
  const height = use100vh();
  const newHeight = height ? height * 0.88 : "88vh";

  return (
    <header className="hero">
      <div className="hero-grid" style={{ height: newHeight }}>
        <StaticImage
          src="../images/people.jpeg"
          alt="Image of people laughing and sipping coffee inside Ruthy's Cafe Tauranga"
          className="hero-img"
          placeholder="blurred"
        />
        <div className="hero-content content-container">
          <div className="hero-content-txt">
            <h1>
              Welcome to Ruthy's Coffee Bar & Eatery! Tauriko's favourite cafe
              for home-style eats, great coffee and even better banter.
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
