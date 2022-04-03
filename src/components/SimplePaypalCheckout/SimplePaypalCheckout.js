import React from "react";
import PropTypes from "prop-types";
import styles from "./SimplePaypalCheckout.module.scss";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const SimplePaypalCheckout = () => (
  <PayPalScriptProvider
    options={{
      "client-id":
        "AWSp71a5P6WmwWf-tBj1_msENK3pAEZGC98vMZ7FsiWKptDgc_Vd09NrReSTh6YZbeL5k8HKYxAFP7xU",
    }}
  >
    <PayPalButtons
      style={{ layout: "horizontal", color: "white" }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "0.01",
              },
              shipping: {
                options: [
                  {
                    id: "SHIP_123",
                    label: "Free Shipping",
                    type: "SHIPPING",
                    selected: true,
                    amount: {
                      value: "0.01",
                      currency_code: "USD",
                    },
                  },
                  {
                    id: "SHIP_456",
                    label: "Pick up in Store",
                    type: "PICKUP",
                    selected: false,
                    amount: {
                      value: "0.00",
                      currency_code: "USD",
                    },
                  },
                ],
              },
            },
          ],
        });
      }}
    />
  </PayPalScriptProvider>
);

SimplePaypalCheckout.propTypes = {};

SimplePaypalCheckout.defaultProps = {};

export default SimplePaypalCheckout;
