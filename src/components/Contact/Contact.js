import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.scss";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className={`${styles.Contact} container mt-3`}>
      <Helmet>
        <title>Contact our friendly support.</title>

        <meta
          property="og:title"
          name="title"
          content="Contact our friendly support."
        />
        <meta
          property="og:description"
          name="description"
          content="We are on-hand to assist you 24/7"
        />
        <meta property="og:url" content="https://thehandsometoad.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      <h1 className="lead">Contact us</h1>
      <address>
        <strong>The Handsometoad Toad Ltd</strong>
        <br />
        55 Crown Street,
        <br />
        Brentwood, Essex,
        <br /> England, CM14 4BD
        <br />
        <abbr title="email">Email:</abbr>{" "}
        <a href="mailto:support@thehandsometoad.com?subject=Handsometoad.com">
          support@thehandsometoad.com
        </a>
      </address>
    </div>
  );
};

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
