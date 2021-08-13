import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="navbar">
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
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
