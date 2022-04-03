import React from "react";
import PropTypes from "prop-types";
import styles from "./Dynamic_website_development_team.module.scss";
import Pricing from "../Pricing/Pricing";
import { Helmet } from "react-helmet";

const Dynamic_website_development_team = () => (
  <div
    className={
      "container-fluid " + styles.Dynamic_website_development_team
    }
  >
    <Helmet>
        <title>Static or dynamic website and development team</title>

        <meta
          property="og:title"
          name="title"
          content="Static/dynamic website and development team"
        />
        <meta
          property="og:description"
          name="description"
          content="Static/dynamic website and development team"
        />
        <meta property="og:url" content="https://thehandsometoad.com/Dynamic%20website%20+%20development%20team" />
        <meta property="og:type" content="website" />
      </Helmet>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className={styles['display-4']+" display-4"}>STATIC/DYNAMIC WEBSITE + DEVELOPMENT TEAM</h1>
      <div className="row">
        <div className="col-md">
          <img
            width="350"
            src="/images/BP-4-Software-development-1024x511.jpeg"
            className="rounded img-thumbnail"
            alt="template_two_ladies.png"
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
);

Dynamic_website_development_team.propTypes = {};

Dynamic_website_development_team.defaultProps = {};

export default Dynamic_website_development_team;
