import React from 'react';
import PropTypes from 'prop-types';
import styles from './Website_app_development_team.module.scss';
import Pricing from '../Pricing/Pricing';
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Meta from '../Meta/Meta';

const Website_app_development_team = () => {
  const locale = useSelector((state) => state.locale);
  return(
<div className="container-fluid">
<Meta ogtype="website" canonical={`${locale.domain}Website%20+%20app%20+%20development%20team`} keywords="software development, development team, website, ios app" ogimage={`${locale.domain}images/website_app_development_team-page.png`} ogurl={`${locale.domain}Website%20+%20app%20+%20development%20team`} ogdescription="We will build and deploy websites and native iOs and android apps to your specification." ogtitle="Website, IOS and Android apps plus dev team."/>
  <div className={styles.Website_app_development_team}>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className={styles["display-4"] + " display-4"}>WEBSITE + IOS AND ANDROID APPS + DEVELOPMENT TEAM</h1>
      <p className="lead">We will build and deploy websites and native iOs and android apps to your specification.</p>
    </div>
    <Pricing option="3"/>
  </div>
  </div>
)};

Website_app_development_team.propTypes = {};

Website_app_development_team.defaultProps = {};

export default Website_app_development_team;
