import React from "react";
import PropTypes from "prop-types";
import styles from "./BillingAddress.module.scss";
import BillingAddressCom from "../BillingAddressCom/BillingAddressCom";
import BillingAddressCouk from "../BillingAddressCouk/BillingAddressCouk";

const BillingAddress = ({ locale, history }) => {
  let addressComponent;
  switch (locale.domain) {
    case "https://thehandsometoad.com/":
      addressComponent = <BillingAddressCom locale={locale} history={history} />;
      break;
    case "https://thehandsometoad.co.uk/":
      addressComponent = <BillingAddressCouk locale={locale} history={history}/>
      break;

    default:
      addressComponent = <BillingAddressCom locale={locale} history={history}/>;
      break;
  }

  return (
    <div className="col-md-8 order-md-1">
      <h4 className="mb-3">Billing address</h4>
      {addressComponent}
    </div>
  );
};

BillingAddress.propTypes = {};

BillingAddress.defaultProps = {};

export default BillingAddress;
