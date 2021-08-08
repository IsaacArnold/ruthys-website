import React, { useState } from "react";
import { Link } from "gatsby";
import Hamburger from "../images/svg/hamburger.svg";
import Close from "../images/svg/x.svg";

const MobileMenu = () => {
  const [showMenu, SetShowMenu] = useState(false);

  let menu;
  let menuBg;

  if (showMenu) {
    menu = (
      <div className="mobile-menu">
        <div className="mobile-menu-head">
          <h2>Ruthy's</h2>
          <Close onClick={() => SetShowMenu(false)} />
        </div>
        <ul className="mobile-ul">
          <li>
            <Link
              to="/#"
              className="mobile-li"
              onClick={() => SetShowMenu(false)}
            >
              Menu
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
      {menuBg}
      {menu}
    </div>
  );
};

export default MobileMenu;
