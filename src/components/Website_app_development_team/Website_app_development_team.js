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
<Meta ogtype="website" canonical={`${locale.domain}Website%20+%20app%20+%20development%20team`} keywords="software development, development team, website, ios app" ogimage={`${locale.domain}images/website_app_development_team-page.png`} ogurl={`${locale.domain}Website%20+%20app%20+%20development%20team`} ogdescription="We will build and deploy websites, native iOs and android apps to your specification, this is our enterprise package. Open your account today and your dedicated account manager will give you a call." ogtitle="Website, IOS and Android apps plus dev team."/>
  <div className={styles.Website_app_development_team}>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className={styles["display-4"] + " display-4"}>WEBSITE + IOS AND ANDROID APPS + DEVELOPMENT TEAM</h1>
      <p className="lead">We will build and deploy websites and native iOs and android apps to your specification.</p>
    </div>
    <Pricing option="3"/>
    <div className="row">
        <div class="d-flex justify-content-center align-items-center">
          <div className={styles.container + ` container`}>
            <div className={styles["h2-container"]+` mb-3`}>
              <h2 className={styles["h2-title"]}>What is a project</h2>
            </div>
              <p>
              A project is any undertaking, carried out individually or collaboratively and possibly involving research or design, that is carefully planned to achieve a particular aim. An alternative view sees a project managerially as a sequence of events: a "set of interrelated tasks to be executed over a fixed period and within certain cost and other limitations". As per Wikipedia.
              </p>
              <h3>
                Who is a project manager?
              </h3>
              <p>
              Project managers oversee the planning, execution, and evaluation of large undertakings. They often coordinate teams of people and resources, and they must ensure that deadlines are met while keeping costs down. There are many different types of project managers, but they all have one thing in common: They're responsible for making sure projects run smoothly.
              </p>
              <p>
              They are often called upon to manage multiple tasks at once, so they need to be able to prioritize effectively. This means that they must be able to identify which tasks are most important and then focus on those first.
              </p>
              <h3>
                Project management
              </h3>
              <p>
              Project management is the process of leading the work of a team to achieve all project goals within the given constraints. This information is usually described in project documentation, created at the beginning of the development process. The primary constraints are scope, time, and budget. Here at thehandsometoad we have some of the best project managers in the industry dedicated to the smooth running of your project, our WEBSITE + IOS AND ANDROID APPS + DEVELOPMENT TEAM package provides this service.
              </p>
              <div className={styles["h2-container"]+` mb-3`}>
              <h2 className={styles["h2-title"]}>Project Management Tools for Teams</h2>
            </div>
            <p>
              If you work with other people, you need to make sure you use tools that will help them collaborate effectively. You also need to make sure that you can easily share files and documents with others.
              </p>
              <ul>
                <li>
                  thehandsometoad
                </li>
                <li>
                  Jira
                </li>
                <li>
                  Trello
                </li>
                <li>
                  Asana
                </li>
                <li>
                  Basecamp
                </li>
              </ul>
          </div>
        </div>
      </div>
  </div>
  </div>
)};

Website_app_development_team.propTypes = {};

Website_app_development_team.defaultProps = {};

export default Website_app_development_team;
