import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import "../styles/contact.scss";

const SuccessPage = () => {
  return (
    <Layout>
      <SEO
        title="Thank You!"
        description="Thank you for submitting your message. One of the team will be in touch soon."
      />
      <div className="contact-content-container">
        <h1>Thank You!</h1>
        <p>Your form has successfully been submitted.</p>
        <p>One of the team will be in touch soon.</p>
        <Link to="/" className="success-btn">
          Return to home page
        </Link>
      </div>
    </Layout>
  );
};

export default SuccessPage;
