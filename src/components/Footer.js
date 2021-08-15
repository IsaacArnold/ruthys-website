import React from "react";
import { Link } from "gatsby";

import Facebook from "../images/svg/facebook.svg";
import Instagram from "../images/svg/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content-container">
        <div className="footer-address">
          <h3>Address</h3>
          <p>204 Taurikura Drive,</p>
          <p>Tauriko, Tauranga 3112</p>
        </div>
        <div className="footer-hours">
          <h3>Hours</h3>
          <p>Mon - Fri:</p>
          <p>6:30am - 2:30pm</p>
          <p>Sat & Sun:</p>
          <p>Closed</p>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Get in touch with the team!</p>
          <Link to="contact" className="secondary-btn">
            Contact Us
          </Link>
        </div>
        <div className="footer-socials">
          <h3>Socials</h3>
          <div className="footer-icon-container">
            <Link
              to="https://www.facebook.com/Ruthys-110355034016366"
              className="footer-icon"
            >
              <Facebook className="footer-icon" />
            </Link>
            <Link
              to="https://www.instagram.com/ruthys_coffeebar/"
              className="footer-icon"
            >
              <Instagram className="footer-icon" />
            </Link>
          </div>
        </div>
      </div>
      <p className="boo-stamp">Made with &#9829; by Branch Out Online | 2021</p>
    </footer>
  );
};

export default Footer;
