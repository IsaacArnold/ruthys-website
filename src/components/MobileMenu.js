import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Hamburger from "../images/svg/hamburger.svg";
import Close from "../images/svg/x.svg";

const MobileMenu = () => {
  const [showMenu, SetShowMenu] = useState(false);

  let menu;

  if (showMenu) {
    menu = (
      <div className="mobile-menu visible">
        <div className="mobile-menu-head">
          <StaticImage
            src="../images/logo-removebg-preview.png"
            alt="Ruthy's logo"
            className="logo"
            placeholder="blurred"
          />
          <Close onClick={() => SetShowMenu(false)} className="close-icon" />
        </div>
        <ul className="mobile-ul">
          <li>
            <Link
              to="/#"
              className="mobile-li"
              onClick={() => SetShowMenu(false)}
            >
              Menus
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className="mobile-li"
              onClick={() => SetShowMenu(false)}
            >
              Catering & Functions
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className="mobile-li"
              onClick={() => SetShowMenu(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
    // menuBg = (
    //   <div className="mobile-menu-bg" onClick={() => SetShowMenu(false)}></div>
    // );
  }

  return (
    <div>
      <Hamburger className="hamburger" onClick={() => SetShowMenu(!showMenu)} />
      {menu}
    </div>
  );
};

export default MobileMenu;
