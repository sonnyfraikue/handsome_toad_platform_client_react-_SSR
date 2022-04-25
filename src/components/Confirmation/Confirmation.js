import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Confirmation.module.scss";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { config } from "../../../config";

const Confirmation = () => {
  const [paymentStatus, setPaymentStatus] = useState({
    data: { status: null },
  });
  const contact = useSelector((state) => state.contact);
  const paymentResponse = useSelector((state) => state.paymentResponse);
  const dispatch = useDispatch();
  const apiConfig = {
    headers: {
      Authorization: `Bearer ${config.RAZZLE_FIREBASE_API_KEY}`,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    if (!paymentStatus.data.status) {
      axios
      .get(
        config.RAZZLE_MOLLIE_CHECK_ORDER_API_URL +
          `?orderid=${paymentResponse.data.id}`,
        apiConfig
      )
      .then(({ data }) => {
        setPaymentStatus( data );
        dispatch({
          type: "empty-basket",
          payload: {},
        });
      })
      .catch(({ err }) => {
        console.log(err);
      });
    }
    

  }, []);
  
  // const regDomain = (contactId = contact.id, basketObj, count, checkoutLink) => {
  //   if(!contactId) return;
  //   const sendRegData = {
  //     registrant_id: contactId,
  //     whois_privacy: false,
  //     auto_renew: false,
  //     extended_attributes: null,
  //     premium_price: basketObj["registration_price"],
  //     domain: basketObj["domain"],
  //     premium: basketObj["premium"],
  //   };

  //   axios.post(
  //     config.RAZZLE_DNSIMPLE_REGDOM_API_URL,
  //     sendRegData,
  //     apiConfig,
  //   )
  //     .then(({ data }) => {
  //       const mergedObj = {
  //         ...data.data.data,
  //         ...basketObj
  //       }
  //       dispatch({
  //         type: "add-to-order",
  //         payload: { order: mergedObj },
  //       });
  //       // dispatch({
  //       //   type: "empty-basket",
  //       //   payload: {},
  //       // });
  //       if(count === basket.length - 1){
  //        window.location.href= checkoutLink
  //       }
  //     })
  //     .catch(function (error) {
  //       // dispatch({
  //       //   type: "empty-basket",
  //       //   payload: {},
  //       // });
  //       if(count === basket.length - 1){
  //        window.location.href= checkoutLink
  //       }
  //     });
  // };

  return (
    <div className={`${styles.Confirmation} container`}>
      <div className={`${styles.jumbotron} jumbotron text-center`}>
        {paymentStatus.data.status === "created" && (
          <div>
            <h1 className="display-3">Oops!</h1>
            <p className="lead">
              We have still been unable to take your payment, order status <b>{paymentStatus.data.status}</b>
            </p>
            <p>
              Do you wish to try again{" "}
              <a href={paymentResponse.data["_links"].checkout.href}>
                make payment
              </a>
            </p>
          </div>
        )}
        {paymentStatus.data.status === "paid" && (
          <div>
            <h1 className="display-3">Thank you!</h1>
            <p className="lead">
              We've emailed a confirmation of your order to{" "}
              <strong>{contact.email}</strong>. Now go ahead and be fantastic!
            </p>
          </div>
        )}
        <hr />
        <p>
          Having trouble? <a href="/contact">Contact us</a>
        </p>
        <p className="lead">
          <a href="/login" className="link-primary">
            Manage
          </a>{" "}
          your account.
        </p>
      </div>
    </div>
  );
};

Confirmation.propTypes = {};

Confirmation.defaultProps = {};

export default Confirmation;
