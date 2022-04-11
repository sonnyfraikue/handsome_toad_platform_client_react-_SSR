import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.scss";
import { useSelector } from "react-redux";
import Meta from "../Meta/Meta";

const Contact = () => {
  const locale = useSelector((state) => state.locale);
  return (
    <div className={`${styles.Contact} container mt-3`}>
      <Meta ogtype="website" canonical={`${locale.domain}contact`} keywords="software development, site-builder, easy-to-use" ogimage={`${locale.domain}images/contact-page.png`} ogurl={`${locale.domain}contact`} ogdescription="We are on-hand to assist you 24/7" ogtitle="Contact our friendly support."/>
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
