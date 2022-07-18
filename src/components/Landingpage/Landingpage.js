import React from "react";
import PropTypes from "prop-types";
import styles from "./Landingpage.module.scss";
import Tile from "../Tile/Tile";
import DomainSearch from "../DomainSearch/DomainSearch";
import Clientslist from "../Clientslist/Clientslist";
import { useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import { useLocation } from "react-router-dom";
import Meta from "../Meta/Meta";


const Landingpage = (props) => {
  const locale = useSelector((state) => state.locale);
  const state = {
    productCards: [
      {
        id: 1,
        productName: "Bronze Plan",
        productTitle: "Website Builder/Domain",
        productDescription:
          "Choose your website design from a variety of templates and customise with our easy-to-use site-builder",
        ctaUrl: "/Static website & domain",
        registerLink: "/register/BronzePlan/Free"
      },
      {
        id: 2,
        productName: "Gold Plan",
        productTitle: "Static/Dynamic Website + Development Team",
        productDescription:
          "Collaborate with our designers and your Account Manager to create your very own website design and bespoke functionality",
        ctaUrl: "/Dynamic website + development team",
        registerLink: "/register/Goldplan/Enterprise"
      },
      {
        id: 3,
        productName: "Diamond Plan",
        productTitle: "Website + IOS And Android APPS + Development Team",
        productDescription:
          "We will build and deploy websites and native iOs and android apps to your specification",
        ctaUrl: "/Website + app + development team",
        registerLink: "/register/DiamondPlan/Enterprise"
      },
    ],
    serviceCards: [
      {
        id: 4,
        productName: "",
        productTitle: "Domain",
        productDescription: `Search for and register your shiny new website domain with us today! our domains start from as little as ${currencyFormatter.format(
          0.99,
          {
            code: locale.currency,
          }
        )}, speak to one of our support agents today`,
        ctaUrl: "blah",
      },
      {
        id: 5,
        productName: "",
        productTitle: "Hosting",
        productDescription:
          "Hosting with us couldnt be simpler, speak to one of our support agents today to transfer or start a new project with us.",
        ctaUrl: "blah",
      },
      {
        id: 6,
        productName: "",
        productTitle: "Bespoke development",
        productDescription:
          "Our first class software developers are on-hand to help you realise your project goals, you choose features for your next project and leave the rest to us.",
        ctaUrl: "blah",
      },
    ],
    domainSearch: {
      id: 10,
      domainAdvert: `Buy or transfer a domain with us for peace of mind.`,
      domainTitle: "Domain registration done simply.",
      domainFormPlaceholder: "example.com",
    },
  };

  const useQuery = () => {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  };

  const redirector = (url) => {
    props.history.push(url);
  };
  return (
    <div className="container-fluid">
      <Meta ogtype="website" canonical={`${locale.domain}`} keywords="software development, ios and android apps, domain registration" ogimage={`${locale.domain}images/landing-page.png`} ogurl={`${locale.domain}`} ogdescription="Our intuitive GUI and on-demand AGILE development team will create your dreams. Our development model allows you the flexibility of building and deploying in chunks at your own convenience" ogtitle="No nonsense software and domain solutions."/>
      <div className={styles.Landingpage}>
        <div className={"row " + styles.Searchdomain}>
          <div className={"col-md-6 " + styles["mt-7"]}>
            <DomainSearch
              domainLead="Choose a name to get started, e.g example.com"
              key={state.domainSearch.id}
              domainAdvert={state.domainSearch.domainAdvert}
              domainFormPlaceholder={state.domainSearch.domainFormPlaceholder}
              domainTitle={state.domainSearch.domainTitle}
              redirector={redirector}
              query={useQuery()}
            />
          </div>
          <div className="col-md-6"></div>
        </div>
        <div className="row justify-content-center">
          <h1 className={`${styles['packages-title']} lead mt-3`}>
            Create your <b>online presence</b>
          </h1>
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <h5 className={`${styles['packages-title']} font-weight-light`}>
              All our packages allow you to deploy an MVP aka minimum viable
              product and purchase features <b>as-you-go</b>
            </h5>
          </div>
        </div>

        <div className="container mt-5 mb-5">
          <div className={"row justify-content-evenly "}>
            {state.productCards.map((productCard) => (
              <Tile
                key={productCard.id}
                productName={productCard.productName}
                productTitle={productCard.productTitle}
                productDescription={productCard.productDescription}
                ctaUrl={productCard.ctaUrl}
                registerLink={productCard.registerLink}
              />
            ))}
          </div>
        </div>

        {/* <div className={'row justify-content-center mt-5 mb-5 ' + styles.Services}>
        <div className={styles['mt-7']}>
          <div className="row justify-content-center">
            <p className="lead">Our services</p>
          </div>
        </div>
      </div> */}

        {/* SERVICES BELOW */}
        {/* <div className="services container mt-5 mb-5">
        <div className={'row justify-content-center '}>
        {state.serviceCards.map(serviceCard => <Tile key={serviceCard.id} productName={serviceCard.productName} productTitle={serviceCard.productTitle} productDescription={serviceCard.productDescription} ctaUrl={serviceCard.ctaUrl} />)}
         
        </div>

        
      </div> */}
        <Clientslist />
      </div>
    </div>
  );
};

Landingpage.propTypes = {
  productName: PropTypes.string,
  productTitle: PropTypes.string,
  productDescription: PropTypes.string,
  ctaUrl: PropTypes.string,
};

export default Landingpage;
