import React from "react";
import SEO from "./SEO";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../styles/normalize.css";
import "../styles/styles.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SEO />
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
