import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

import "../styles/normalize.css";
import "../styles/styles.scss";
import "../styles/404.scss";

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo
        title="Error: Page Not Found"
        description="The page you are looking for has either been removed or doesn't exist"
      />
      <section className="notfound-grid content-container">
        <div className="notfound-content">
          <h1>404: Page Not Found</h1>
          <p>
            Whoops! Looks like you are a little too adventerous (too much
            coffee?). Unfortunately, the page you've landed on has either been
            removed or doesn't exist.
          </p>
          <p>
            We suggest not having that afternoon cup and instead head back to
            our home page - click the button below.
          </p>
          <div className="laptop-notfound-btn-container">
            <Link to="/" className="primary-btn laptop-notfound-btn">
              Return home
            </Link>
          </div>
        </div>
        <StaticImage
          src="../images/coffee-bean.jpeg"
          alt="Image of someone holding a coffee bean between their fingers"
          className="notfound-img"
          placeholder="blurred"
          layout={"fullWidth"}
        />
        <Link to="/" className="primary-btn notfound-btn">
          Return home
        </Link>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
