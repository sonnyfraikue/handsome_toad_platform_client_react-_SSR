import React from "react";
import PropTypes from "prop-types";
import styles from "./Static_website_domain.module.scss";
import Pricing from "../Pricing/Pricing";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Meta from "../Meta/Meta";

const Static_website_domain = () => {
  const locale = useSelector((state) => state.locale);

  return(
  <div className={"container-fluid " + styles.Static_website_domain}>
    <Meta ogtype="website" canonical={`${locale.domain}`} keywords="software development, site-builder, easy-to-use" ogimage={`${locale.domain}/images/static_website_domain-page.png`} ogurl={`${locale.domain}/Static%20website%20&amp;%20domain`} ogdescription="Choose your website design from a variety of templates and customise with our easy-to-use site-builder" ogtitle="Website builder and domain."/>
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
            alt="website builder template of two ladies"
            title="website builder template of two ladies"
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
)};

Static_website_domain.propTypes = {};

Static_website_domain.defaultProps = {};

export default Static_website_domain;
