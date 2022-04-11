import React from "react";
import PropTypes from "prop-types";
import styles from "./Regtitle.module.scss";

const Regtitle = ({ registerplan, registerpackage }) => {
  let accregisterplan, accregisterpackage;
  switch (registerplan) {
    case "BronzePlan":
      accregisterplan = "website builder & domain";
      accregisterpackage = "free";
      break;

    case "GoldPlan":
      accregisterplan = "dynamic website and development team";
      accregisterpackage = "free";
      break;
    case "DiamondPlan":
      accregisterplan = "website + app + development team";
      accregisterpackage = "enterprise";
      break;
    default:
      accregisterplan = "website builder & domain";
      accregisterpackage = "free";
      break;
  }

  switch (registerpackage) {
    case "Enterprise":
      accregisterpackage = "enterprise";
      break;

      case "Free":
      accregisterpackage = "free";
      break;
  
    default:
      break;
  }

  return (
    <div className={`mb-4 ${styles.Regtitle}`}>
      <h1 className={`${styles['card-text']} card-text`}>Create your {accregisterpackage}* <span className="text-muted">{accregisterplan}</span> account</h1>
    </div>
  );
};

Regtitle.propTypes = {};

Regtitle.defaultProps = {};

export default Regtitle;
