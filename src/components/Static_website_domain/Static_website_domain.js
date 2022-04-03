import React from "react";
import PropTypes from "prop-types";
import styles from "./Static_website_domain.module.scss";
import Pricing from "../Pricing/Pricing";
import { Helmet } from "react-helmet";

const Static_website_domain = () => (
  <div className={"container-fluid " + styles.Static_website_domain}>
    <Helmet>
        <title>Website builder and domain</title>

        <meta
          property="og:title"
          name="title"
          content="Website builder and domain"
        />
        <meta
          property="og:description"
          name="description"
          content="Website builder and domain"
        />
        <meta property="og:url" content="https://thehandsometoad.com/Static%20website%20&amp;%20domain" />
        <meta property="og:type" content="website" />
      </Helmet>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className={styles["display-4"] + " display-4"}>
        WEBSITE BUILDER/DOMAIN
      </h1>
      <div className="row">
        <div className="col-md">
          <img
            width="300"
            src="/images/template_two_ladies.png"
            className="rounded img-thumbnail"
            alt="template_two_ladies.png"
          />
        </div>
        <div className="col-md">
          <p className="lead">
            Choose your website design from a variety of templates and customise
            with our easy-to-use site-builder.
          </p>
        </div>
      </div>
    </div>
    <Pricing option="1" />
  </div>
);

Static_website_domain.propTypes = {};

Static_website_domain.defaultProps = {};

export default Static_website_domain;
