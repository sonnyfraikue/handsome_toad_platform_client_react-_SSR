import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.scss";
import { useSelector } from "react-redux";
import Meta from "../Meta/Meta";

const Contact = () => {
  const locale = useSelector((state) => state.locale);
  return (
    <div className={`${styles.Contact} container mt-3`}>
      <Meta ogtype="website" canonical={`${locale.domain}contact`} keywords="software development, site-builder, easy-to-use" ogimage={`${locale.domain}images/contact-page.png`} ogurl={`${locale.domain}contact`} ogdescription="Our round-the-clock support is on-hand to assist you 24/7 via phone and email. Call your local support team to speak to a human, no recorded messages." ogtitle="Contact our friendly support - The Handsometoad Toad Ltd."/>
      <h1 className="lead">Contact us</h1>
      <address>
        <strong>The Handsometoad Toad Ltd</strong>
        <br />
        55 Crown Street,
        <br />
        Brentwood, Essex,
        <br /> England, CM14 4BD
        <br />
        <strong><abbr title="email">Email:</abbr></strong>
        <a href="mailto:support@thehandsometoad.com?subject=Handsometoad.com">
          support@thehandsometoad.com
        </a>
        <br />
        <br />
        <strong>Phone:</strong>
        <br />
        USA <a href="tel:+1(650)5095008">+1 (650) 509-5008</a>
        <br />
        Europe <a href="tel:+441932809635">+44 1932 809635</a>
      </address>
    </div>
  );
};

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
