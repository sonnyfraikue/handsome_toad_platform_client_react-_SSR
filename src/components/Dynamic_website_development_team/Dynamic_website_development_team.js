import React from "react";
import PropTypes from "prop-types";
import styles from "./Dynamic_website_development_team.module.scss";
import Pricing from "../Pricing/Pricing";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Meta from "../Meta/Meta";

const Dynamic_website_development_team = () => {
  const locale = useSelector((state) => state.locale);
  return(
  <div
    className={
      "container-fluid " + styles.Dynamic_website_development_team
    }
  >
    <Meta ogtype="website" canonical={`${locale.domain}Dynamic%20website%20+%20development%20team`} keywords="software development, site-builder, easy-to-use" ogimage={`${locale.domain}images/dynamic_website_development_team-page.png`} ogurl={`${locale.domain}Dynamic%20website%20+%20development%20team`} ogdescription="Collaborate with our designers and your Account Manager to create your very own website design and bespoke functionality" ogtitle="Static or dynamic website and development team."/>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className={styles['display-4']+" display-4"}>STATIC/DYNAMIC WEBSITE + DEVELOPMENT TEAM</h1>
      <div className="row">
        <div className="col-md">
          <img
            width="350"
            src="/images/BP-4-Software-development-1024x511.jpeg"
            className="rounded img-thumbnail"
            alt="person working on laptop"
            title="person working on laptop"
          />
        </div>
        <div className="col-md">
          <p className="lead">
            Collaborate with our designers and your Account Manager to create your very own website design and bespoke functionality.
          </p>
        </div>
      </div>
    </div>
    <Pricing option="2" />
  </div>
)};

Dynamic_website_development_team.propTypes = {};

Dynamic_website_development_team.defaultProps = {};

export default Dynamic_website_development_team;
