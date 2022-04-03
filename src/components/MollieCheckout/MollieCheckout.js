import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MollieCheckout.module.scss";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useForm } from "react-hook-form";
import AlertDismissable from "../Alert/Alert";

var options = {
  styles: {
    base: {
      color: "#000",
      fontSize: "1rem",
      backgroundColor: "#fff",
      border: "1px solid #DDDDDD",
      "::placeholder": {
        color: "rgba(68, 68, 68, 0.2)",
      },
    },
  },
};

const MollieCheckout = ({ history }) => {
  const [mollie, setMollie] = useState();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);
  const basket = useSelector((state) => state.basket.domains);
  const summary = useSelector((state) => state.basket.summary);
  const locale = useSelector((state) => state.locale);
  const [formErrors, setFormError] = useState({
    isVisible: false,
    message: "An error occured!",
  });
  const apiConfig = {
    headers: {
      "Authorization": `Bearer ${process.env.REACT_APP_FIREBASE_API_KEY}`,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.mollie.com/v1/mollie.js";
    script.addEventListener("load", () => {
      setMollie(
        window.Mollie(process.env.REACT_APP_MOLLIE_PROFILEID, { locale: locale.languange })
      );
    });
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (mollie) {
      var cardNumber = mollie.createComponent("cardNumber", options);
      cardNumber.mount("#card-number");

      var cardHolder = mollie.createComponent("cardHolder", options);
      cardHolder.mount("#card-holder");

      var expiryDate = mollie.createComponent("expiryDate", options);
      expiryDate.mount("#expiry-date");

      var verificationCode = mollie.createComponent(
        "verificationCode",
        options
      );
      verificationCode.mount("#verification-code");

      document.forms[0].addEventListener("submit", (e) => {
        e.preventDefault();

        mollie.createToken().then(function (result) {
          dispatch({
            type: "set-cardToken",
            payload: { cardToken: result },
          });
          if(result.token){
            sendPayment(result,contact,basket)
          }
          // Handle the result this can be either result.token or result.error.
        });
      });
    }
  }, [mollie]);

  const sendPayment = (cardToken, sendRegData, basketObj) => {
    const domainDesc = basketObj.map((arr) => arr.domain).join();
    const orderNumber = "1111";
    const tempObj = {
      ...sendRegData,
      ...{ card_token: cardToken.token },
      ...{ organization_name: "" },
      ...{ locale: locale.languange },
      ...{ currency: locale.currency },
      ...{ order_number: orderNumber },
      ...{ redirect_url: `${process.env.REACT_APP_DOMAIN}/confirmation/${orderNumber}` },
      ...{ webhook_url: `${process.env.REACT_APP_DOMAIN}/confirmation/${orderNumber}` },
      ...{ method: "creditcard" },
      ...{ name: domainDesc },
      ...{ quantity: basketObj.length },
      ...{ vat_rate: summary.vat_rate },
      ...{ vat_price: summary.vat_price },
      ...{ unit_price: summary.price },
      ...{ total: summary.total },
      ...{ discount_price: summary.discount_price },
    };
    axios({
      method: "post",
      url: process.env.REACT_APP_MOLLIE_CREATE_ORDER_API_URL,
      data: tempObj,
      apiConfig,
    })
      .then(({ data }) => {
        const mergedObj = {
          ...data.data.data,
          ...basketObj,
        };
        dispatch({
          type: "add-to-order",
          payload: { order: mergedObj },
        });
        dispatch({
          type: "update-payment-response",
          payload: { paymentResponse: data },
        });
        dispatch({
          type: "unset-cardToken",
          payload: { cardToken: null },
        });
        basket.map((each, index) => regDomain(contact.id, each, index, data.data['_links'].checkout.href));
      })
      .catch(function (error) {
        setFormError({ isVisible: true, message: error.message });
      });
  };

  const regDomain = (contactId = contact.id, basketObj, count, checkoutLink) => {
    if(!contactId) return;
    const sendRegData = {
      registrant_id: contactId,
      whois_privacy: false,
      auto_renew: false,
      extended_attributes: null,
      premium_price: basketObj["registration_price"],
      domain: basketObj["domain"],
      premium: basketObj["premium"],
    };

    axios({
      method: "post",
      url: process.env.REACT_APP_DNSIMPLE_REGDOM_API_URL,
      data: sendRegData,
      apiConfig,
    })
      .then(({ data }) => {
        const mergedObj = {
          ...data.data.data,
          ...basketObj
        }
        dispatch({
          type: "add-to-order",
          payload: { order: mergedObj },
        });
        dispatch({
          type: "empty-basket",
          payload: {},
        });
        if(count === basket.length - 1){
         window.location.href= checkoutLink
        }
      })
      .catch(function (error) {
        dispatch({
          type: "empty-basket",
          payload: {},
        });
        if(count === basket.length - 1){
         window.location.href= checkoutLink
        }
      });
  };
  

  return (
    <div>
      <AlertDismissable
          message={formErrors.message}
          toggler={setFormError}
          isOpen={formErrors.isVisible}
          color="warning"
        ></AlertDismissable>
      <form>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="card-holder">Name</label>
            <div id="card-holder" className="form-control"></div>
            <div id="card-holder-error"></div>
          </div>
          <div className="col-md-6">
            <label htmlFor="card-number">Card number</label>
            <div id="card-number" className="form-control"></div>
            <div id="card-number-error"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label htmlFor="expiry-date">Expiry date</label>
            <div id="expiry-date" className="form-control"></div>
            <div id="expiry-date-error"></div>
          </div>
          <div className="col-md-6">
            <label htmlFor="verification-code">CVV</label>
            <div id="verification-code" className="form-control"></div>
            <div id="verification-code-error"></div>
          </div>
        </div>
        <div className="row">
          <button className="btn btn-primary btn-lg btn-block ml-3 mr-3 mt-4 mb-4" type="submit">
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};
export default MollieCheckout;
