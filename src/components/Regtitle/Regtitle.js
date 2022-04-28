import React from "react";
import PropTypes from "prop-types";
import styles from "./Regtitle.module.scss";
import Meta from "../Meta/Meta";
import { useSelector, useDispatch } from "react-redux";


const Regtitle = ({ registerplan, registerpackage }) => {
  const locale = useSelector((state) => state.locale);

  let accregisterplan, accregisterpackage;
  switch (registerplan.toLowerCase()) {
    case "bronzeplan":
      accregisterplan = "website builder & domain";
      accregisterpackage = "free";
      break;

    case "goldplan":
      accregisterplan = "dynamic website and development team";
      accregisterpackage = "free";
      break;
    case "diamondplan":
      accregisterplan = "website + app + development team";
      accregisterpackage = "enterprise";
      break;
    default:
      accregisterplan = "website builder & domain";
      accregisterpackage = "free";
      break;
  }

  switch (registerpackage.toLowerCase()) {
    case "enterprise":
      accregisterpackage = "enterprise";
      break;

      case "free":
      accregisterpackage = "free";
      break;
  
    default:
      break;
  }

  return (
    <div className={`mb-4 ${styles.Regtitle}`}>
         <Meta ogtype="website" canonical={`${locale.domain}register/${registerplan||'BronzePlan'}`} keywords={`sign-in, software development, ${accregisterplan}, ${accregisterpackage}, handsome toad ltd`} ogimage={`${locale.domain}images/register-page.png`} ogurl={`${locale.domain}register/${registerplan}`} ogdescription={`Sign up today and build your dreams. Create your ${accregisterpackage} ${accregisterplan} account. All our packages allow you to deploy an MVP aka minimum viable product and purchase features as-you-go.`} ogtitle={`Create ${accregisterpackage} ${accregisterplan} account.`}/>

      <h1 className={`${styles['card-text']} card-text`}>Create your {accregisterpackage}* <span className="text-muted">{accregisterplan}</span> account</h1>
    </div>
  );
};

Regtitle.propTypes = {};

Regtitle.defaultProps = {};

export default Regtitle;
