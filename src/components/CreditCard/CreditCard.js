import React from "react";
import PropTypes from "prop-types";
import styles from "./CreditCard.module.scss";
import MollieCheckout from "../MollieCheckout/MollieCheckout";

const CreditCard = ({history}) => {
  return (
    <div className={styles.CreditCard}>
      <div className="row">
        <div className="col-md-12">
          <MollieCheckout/>
        </div>
      </div>
    </div>
  );
};

CreditCard.propTypes = {};

CreditCard.defaultProps = {};

export default CreditCard;
