import React from "react";
import PropTypes from "prop-types";
import styles from "./Domainfeatures.module.scss";

const Domainfeatures = () => (
  <div className={styles.Domainfeatures}>
    <div className="row mb-3 ml-2 mr-2 lead">
      <div className={styles.featurescol+" col-sm"}>
        <p><b>.com</b></p>
        <p>£0.99 1st/Yr</p>
      </div>
      <div className={styles.featurescol+" col-sm"}>
        <p><b>.co.uk</b></p>
        <p>£0.01 1st/Yr</p>
      </div>
      <div className={styles.featurescol+" col-sm"}>
        <p><b>.store</b></p>
        <p>£0.99 1st/Yr</p>
      </div>
      <div className={styles.featurescol+" col-sm"}>
        <p>Professional Email</p>
        <p>£2.49 Per User/Yr</p>
      </div>
      <div className={styles.featurescol+" col-sm"}>
        <p>SSL security</p>
        <p>£44.99/Yr</p>
      </div>
      
      <div className={styles.featurescol+" col-sm"}>
        <p>Hosting</p>
        <p>3.99/Yr</p>
      </div>
    </div>
  </div>
);

Domainfeatures.propTypes = {};

Domainfeatures.defaultProps = {};

export default Domainfeatures;
