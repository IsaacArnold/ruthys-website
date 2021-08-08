import React from "react";
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
        {/* <ul>
        <li>
          <Link to="/#">Menu</Link>
        </li>
        <li>
          <Link to="/#">Catering & Functions</Link>
        </li>
        <li>
          <Link to="/#">Contact</Link>
        </li>
      </ul> */}
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
