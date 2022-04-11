import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./Checkout.module.scss";
import currencyFormatter from "currency-formatter";
import { useSelector } from "react-redux";
import BillingAddress from "../BillingAddress/BillingAddress";

const Checkout = ({ history }) => {
  const basket = useSelector((state) => state.basket.domains);
  const locale = useSelector((state) => state.locale);

  const priceTotal = () => {
    let price = 0;
    basket.map((each) => {
      return (price += each.registration_price*each.period);
    });

    return price;
  };

  return (
    <div className="container-fluid">
        <p className="lead">Secure checkout.</p>

        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="mb-3">Your order</span>
              <span className="badge badge-secondary badge-pill">
                {basket.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {basket.map((basketItem, newIndex) => (
                <li
                  key={newIndex}
                  className="list-group-item d-flex justify-content-between lh-condensed"
                >
                  <div>
                    <h6 className="my-0">{basketItem.domain}</h6>
                    <small className="text-muted">
                      {basketItem.period}/year
                    </small>
                  </div>
                  <span className="text-muted">
                    {currencyFormatter.format(basketItem.registration_price, {
                      code: locale.currency,
                    })}
                  </span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>Not applicable.</small>
                </div>
                <span className="text-success">
                  {currencyFormatter.format(0, {
                    code: locale.currency,
                  })}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <strong>Total</strong>
                <strong>
                  {currencyFormatter.format(locale.taxrate?
                    priceTotal() + (priceTotal() * locale.taxrate) / 100: priceTotal(),
                    {
                      code: locale.currency,
                    }
                  )}
                </strong>
              </li>
            </ul>
          </div>
          <BillingAddress
            locale={locale}
            history={history}
          />
        </div>
    </div>
  );
};

Checkout.propTypes = {};

Checkout.defaultProps = {};

export default Checkout;
