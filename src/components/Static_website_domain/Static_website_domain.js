import React from "react";
import PropTypes from "prop-types";
import styles from "./Static_website_domain.module.scss";
import Pricing from "../Pricing/Pricing";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Meta from "../Meta/Meta";

const Static_website_domain = () => {
  const locale = useSelector((state) => state.locale);
  return (
    <div className={"container-fluid " + styles.Static_website_domain}>
      <Meta
        ogtype="website"
        canonical={`${locale.domain}Static%20website%20&amp;%20domain`}
        keywords="software development, site-builder, easy-to-use"
        ogimage={`${locale.domain}images/static_website_domain-page.png`}
        ogurl={`${locale.domain}Static%20website%20&amp;%20domain`}
        ogdescription="Choose your website design from a variety of templates and customise with our easy-to-use site-builder, we have a variety of price plans to choose from."
        ogtitle="Website builder and domain, choose your website design online."
      />
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <div className="row">
          <div className="col">
            <h1 className={styles["display-4"] + " display-4"}>
              WEBSITE BUILDER/DOMAIN
            </h1>
          </div>
        </div>
      </div>

      {/* <div className="row">
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
      </div> */}
      <Pricing option="1" />
      <div className="row">
        <div class="d-flex justify-content-center align-items-center">
          <div className={styles.container + ` container`}>
            <div className={styles["h2-container"]+` mb-3`}>
              <h2 className={styles["h2-title"]}>Website</h2>
            </div>
            <p>
                By definition a website is a collection of web pages and related content that is identified by a common domain name and published on at least one web server, we at the <strong>Handsometoad</strong> believe most brick and mortar businesses should be making efforts to secure a web presence if they wish to continue being viable in the future. Websites commonly known as sites can convey the look and feel of a brand with clever styles and colour schemes, these are the aesthetics that make visitors to your site confident they are interacting with the correct brand.
              </p>
              <h3 className={styles["h2-title"]}>How to make a website</h3>
              <p>
                Ultimately websites are built with <strong>code</strong>, the wbesite requires a medium know as <strong>browser</strong> to interpret said code into layouts, text and behaiviour. This could be as simple as a static website where the code does not change or as complex as a dynamic website in which case code may change depending on data or interaction,   
              </p>
              <p>
              You'll start by creating a new page. Next, you'll add some text and images to make sure your site looks good. Finally, you'll add links to other pages so people can navigate easily through your site. You may need to solicit the help of software developers via sites like thehandsometoad and Wix where you either build your own or have it built for you.
              </p>
              <h3 className={styles["h2-title"]}>Web builder sites</h3>
              <p>
                Here are 10 of the best web builders out there offering greate quality. We've tested them all and picked our favorites.
              </p>
              <ul>
                <li>
                  thehandsometoad
                </li>
                <li>
                  Shopify
                </li>
                <li>
                  Wix
                </li>
                <li>
                  Ionos
                </li>
                <li>
                  Webador
                </li>
                <li>
                  Weebly
                </li>
                <li>
                  WordPress
                </li>
                <li>
                  Square online
                </li>
                <li>
                  Site 123
                </li>
                <li>
                  Web.com
                </li>
              </ul>
              <h4>Squarespace</h4>
              <p>
              This site builder offers an intuitive interface with lots of customization options. You can create beautiful websites without any coding experience.
              </p>
              <p>If you're looking for a simple website builder, Squarespace might be the right choice for you. It's one of the easiest sites to build because it has a drag-and-drop editor. You can also add images, text, and other elements to your pages.</p>
              <h4>
              Wix
              </h4>
              <p>
              This site builder has a clean design and allows you to build sites quickly. It's also very affordable.
              </p>
              <p>
              Wix is an easy-to-use website builder with a clean interface. It offers free templates and tools to help you customize your site. You can use its drag-and-drop interface to easily add images, text, links, and more.
              </p>
              <h4>
              Weebly
              </h4>
              <p>
              This site builder is great for beginners because it makes building a website as easy as possible.
              </p>
              <p>
              If you're looking for a simple website builder, Weebly is one of the easiest options available. It's also very affordable.
              </p>
              <h4>
              WordPress 
              </h4>
              <p>
              This site builder is one of the most popular options available. It's free to use and comes with tons of features.
              </p>
              <p>
              There are lots of different ways to build websites these days. You can choose from a variety of website builders, each with its own set of pros and cons. Here are some of the top choices.
              </p>
              <div className={styles["h2-container"]+` mb-3`}>
              <h2 className={styles["h2-title"]}>Make your own website</h2>
            </div>
            <p>
              You've probably heard about websites like Wix or Squarespace, but they're not free. In fact, they cost thousands of dollars. So what if you could build your own website without spending a a fortune? well you're in th right place.
              </p>
              <h3>
              Here's how.
              </h3>
              <p>
              If you're looking to start a blog, you'll need a domain name and hosting. A domain name is the address of your site (like www.mywebsite.com). Hosting is where your site lives when it's online. There are lots of different options out there, so make sure you choose one that works with your budget.
              </p>
              <h3>
              Choose a Hosting Service.
              </h3>
              <p>
              Once you've chosen a domain name, you'll need to find a web host. Web hosts provide space on their servers for people to store their sites. They also offer email services, databases, and other tools that help you manage your site. Most web hosts will charge monthly fees based on how much space you use.
              </p>
              <p>
              There are two main ways to host your website: with a web hosting service or self-hosted. With a web hosting service, you pay monthly fees to use their servers. Self-hosted means you run your own server, so you control everything. It's more expensive, but you also have complete control over how your website looks and functions.
              </p>
              <h3>
              Create an Account with a Domain Name Registrar.
              </h3>
              <p>
              If you choose to go with a web host, you'll need to register your domain name with a domain name registrar. A domain name registrar is where you pay to keep your domain name registered. There are several different registrars out there, so make sure you do some research before choosing one. Click <a href="https://thehandsometoad.com/results">here</a> for some domain name suggestions.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Static_website_domain.propTypes = {};

Static_website_domain.defaultProps = {};

export default Static_website_domain;
