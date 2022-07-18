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
      <p className="lead">
            Collaborate with our designers and your Account Manager to create your very own website design and bespoke functionality.
          </p>
    </div>
    <Pricing option="2" />
    <div className="row">
        <div className="d-flex justify-content-center align-items-center">
          <div className={styles.container + ` container`}>
            <div className={styles["h2-container"]+` mb-3`}>
              <h2 className={styles["h2-title"]} id="website">Why the Development Team Is Your Most Valuable Asset</h2>
            </div>
            <p>
            A development team is an integral part of any business. They help build products, services, and processes. But what makes them so valuable? The development team is responsible for building new features, improving existing ones, and making sure that everything works smoothly. This includes testing, debugging, and fixing bugs.
            </p>
            <h3 className={styles["h2-title"]} id="passionforwork">They have a passion for their work.</h3>
            <p>
            If you ask anyone who has worked with a development team, they will tell you that they love what they do. It’s not just a job; it’s something they enjoy doing. And when they enjoy what they do, they tend to put more effort into it. If you’re looking for a job where you can make a difference, consider joining a development team. You’ll find yourself surrounded by people who share your passion for technology and innovation. And because they’re passionate about their work, they’re more likely to take pride in their accomplishments.
            </p>
            <h3 className={styles["h2-title"]} id="constantlyimproving">They're constantly improving.</h3>
            <p>
            In addition to being passionate about what they do, developers also work hard at making sure they stay up-to-date with new technologies. This means that they learn new skills every day. As a result, they become better at their jobs. That's why a development team is your most valuable asset. Because they're constantly improving themselves, they'll also improve your product. You can't expect them to be perfect at everything, but they should be able to identify areas where they need improvement.
            </p>
            <h3 className={styles["h2-title"]} id="yougrow">They Can Help You Grow.</h3>
            <p>
            Developers are often overlooked when it comes to building a successful company. However, they play a critical role in helping companies succeed. They are again overlooked when it comes to hiring decisions. However, they are one of the most important assets in any company. If you need to hire more people, consider looking for developers first.
            </p>
            <h3 className={styles["h2-title"]} id="deliveringresults">They're dedicated to delivering quality results.</h3>
            <p>
            Developers are usually highly skilled individuals who are passionate about technology. They are also very detail oriented and work well with others. These traits make developers ideal employees for businesses looking to deliver high quality results. If you’re looking to grow your business, then you need to make sure you hire developers who will deliver high-quality work. You should also ensure that they understand how to use the latest technologies and tools to develop your product.
            </p>
            <p>In order to deliver high-quality results, developers need to work closely with other members of the organization. This means they must understand how each department works and how their work fits into the bigger picture. We at the <strong>thehandsometoad</strong> take on the responsibility of putting your team together so you dont have to.</p>
              
          </div>
        </div>
      </div>
  </div>
)};

Dynamic_website_development_team.propTypes = {};

Dynamic_website_development_team.defaultProps = {};

export default Dynamic_website_development_team;
