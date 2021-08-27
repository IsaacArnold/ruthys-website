import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

import "../styles/normalize.css";
import "../styles/styles.scss";
import "../styles/contact.scss";

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact Us" description="Test description" />
      <div className="contact-content-container">
        <h1>Contact Us</h1>
        <p>Fill out the form below and one of the team will be in touch.</p>
        <form
          name="Contact Form"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="Contact Form" />
          <div className="form-section">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="John Smith"
              required={true}
            />
          </div>
          <div className="form-section">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@example.com"
              required={true}
            />
          </div>
          <div className="form-section">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message here..."
              required={true}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
