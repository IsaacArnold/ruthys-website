import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Hamburger from "../images/svg/hamburger.svg";
import Close from "../images/svg/x.svg";

const Navbar = () => {
  function showMenu() {
    document.querySelector(".mobile-menu").classList.toggle("visible");
  }

  return (
    <nav className="navbar">
      {/* Moblie menu */}
      <div className="mobile-menu">
        <div className="mobile-menu-head">
          <StaticImage
            src="../images/logo-removebg-preview.png"
            alt="Ruthy's logo"
            className="logo"
            placeholder="blurred"
          />
          <Close className="close-icon" onClick={() => showMenu()} />
        </div>
        <ul className="mobile-ul">
          <li>
            <Link to="menus" className="mobile-li" onClick={() => showMenu()}>
              Menus
            </Link>
          </li>
          <li>
            <Link
              to="catering"
              className="mobile-li"
              onClick={() => showMenu()}
            >
              Catering & Functions
            </Link>
          </li>
          <li>
            <Link to="contact" className="mobile-li" onClick={() => showMenu()}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* ./ Mobile menu */}
      <div className="content-container">
        <StaticImage
          src="../images/logo-removebg-preview.png"
          alt="Ruthy's logo"
          className="logo"
          placeholder="blurred"
        />
        <ul className="laptop-menu">
          <li>
            <Link to="/#" className="laptop-menu-link">
              Menus
            </Link>
          </li>
          <li>
            <Link to="/#" className="laptop-menu-link">
              Catering & Functions
            </Link>
          </li>
          <li>
            <Link to="/#" className="laptop-menu-link">
              Contact
            </Link>
          </li>
        </ul>
        <Hamburger className="hamburger" onClick={() => showMenu()} />
      </div>
    </nav>
  );
};

export default Navbar;
