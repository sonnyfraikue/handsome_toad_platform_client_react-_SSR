import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./BillingAddressCom.module.scss";
import countries from "../../assets/countries.json";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import axios from "axios";
import {config} from "../../../config";


const BillingAddressCom = ({ history, locale }) => {
  const [checked, setChecked] = useState(true);
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange",
  });
  const { isValid, isSubmitted, isSubmitting } = formState;
  const dispatch = useDispatch();

  const sendData = useCallback(
    async (data) => {
      const sendFormData = {
        label: locale.domain,
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        fax: data.fax,
        address1: data.address,
        city: data.city,
        state_province: data.state,
        postal_code: data.zip,
        country: data.country,
      };
      const apiConfig = {
        headers: {
          "Authorization": `Bearer ${config.RAZZLE_FIREBASE_API_KEY}`,
          "Content-Type": "application/json",
        },
      };
      
      axios.post(
        config.RAZZLE_DNSIMPLE_GETCON_API_URL,
        {data: sendFormData},
        apiConfig,
      )
        .then(({ data }) => {
          // setLoadingObj({ loading: false });
          //start

          if (data.data.length > 0) {
            dispatch({
              type: "add-contact",
              payload: { contact: data.data[0] },
            });
            history.push('/payment')
            return;
          }
          axios.post(
            config.RAZZLE_DNSIMPLE_CREATECON_API_URL,
            {data: sendFormData},
            apiConfig,
          )
            .then(({ data }) => {
              dispatch({
                type: "add-contact",
                payload: { contact: data.data.data },
              });
              history.push('/payment')
            })
            .catch(function (error) {
              console.log(error);
            });

          //end
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    []
  );

  return (
    <div>
    <form onSubmit={handleSubmit(sendData)}>
    <div className={styles.BillingAddressCom}>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            className={
              errors["firstName"] ? "bg-warning form-control " : "form-control"
            }
            id="firstName"
            name="firstName"
            readOnly={isSubmitted}
            placeholder=""
            ref={register({
              required: true,
              pattern: {
                value: /^[a-z ,.'-]+$/i,
                message: "A valid first name is required",
              },
            })}
          />
          <small
            className={
              errors && errors["firstName"]
                ? "text-muted"
                : "d-block text-muted"
            }
          >
            {errors["firstName"] && errors["firstName"]["message"]}
          </small>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            className={
              errors["lastName"] ? "bg-warning form-control " : "form-control"
            }
            id="lastName"
            name="lastName"
            readOnly={isSubmitted}
            placeholder=""
            ref={register({
              required: true,
              pattern: {
                value: /^[a-z ,.'-]+$/i,
                message: "A valid last name is required",
              },
            })}
          />
          <small
            className={
              errors && errors["lastName"] ? "text-muted" : "d-block text-muted"
            }
          >
            {errors["lastName"] && errors["lastName"]["message"]}
          </small>
        </div>
      </div>
      <div className="row">
      <div className="col-md-4 mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          readOnly={isSubmitted}
          className={
            errors["email"] ? "bg-warning form-control " : "form-control"
          }
          id="email"
          placeholder="you@example.com"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        <small
            className={
              errors && errors["email"] ? "text-muted" : "d-block text-muted"
            }
          >
            {errors["email"] && errors["email"]["message"]}
          </small>
      </div>


      <div className="col-md-4">
        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          name="phone"
          readOnly={isSubmitted}
          className={
            errors["phone"] ? "bg-warning form-control " : "form-control"
          }
          id="phone"
          placeholder="+18001234567"
          ref={register({
            required: true,
            pattern: {
              value: /^(\+|00)[1-9][0-9 \-().]{7,32}$/,
              message: "Invalid phone number ",
            },
          })}
        />
        <small
            className={
              errors && errors["phone"] ? "text-muted" : "d-block text-muted"
            }
          >
            {errors["phone"] && errors["phone"]["message"]}
          </small>
      </div>

      <div className="col-md-4">
        <label htmlFor="fax">Fax</label>
        <input
          type="fax"
          name="fax"
          readOnly={isSubmitted}
          className="form-control"
          id="fax"
          placeholder="+18001234567"
          ref={register({
            required: false,
            pattern: {
              value: /^(\+|00)[1-9][0-9 \-().]{7,32}$/,
              message: "Invalid fax number",
            },
          })}
        />
        <small>Optional</small>
        <small
            className={
              errors && errors["fax"] ? "text-muted" : "d-block text-muted"
            }
          >
            {errors["fax"] && errors["fax"]["message"]}
          </small>
      </div>
      </div>

      <div className="mb-3">
        <label htmlFor="address">Address</label>
        <textarea
          type="text"
          className={
            errors["address"]
              ? "bg-warning form-control pl-2 pr-2 pt-1 "
              : "form-control pl-2 pr-2 pt-1"
          }
          id="address"
          name="address"
          readOnly={isSubmitted}
          placeholder="1234 Main St"
          ref={register({
            required: true,
            pattern: {
              // value: /^[A-Z0-9.-]$/i,
              message: "A valid address is required",
            },
          })}
        />
        <small
            className={
              errors && errors["address"] ? "text-muted" : "d-block text-muted"
            }
          >
            {errors["address"] && errors["address"]["message"]}
          </small>
      </div>

      <div className="row">
        <div className="col-md-3 mb-3">
          <label htmlFor="country">Country</label>
          <select
            className={
              errors["country"] ? "bg-warning form-control" : "form-control "
            }
            id="country"
            name="country"
            readOnly={isSubmitted}
            ref={register({
              required: true,
              pattern: {
                value: /^[a-z ,.'-]+$/i,
                message: "A valid country is required",
              },
            })}
          >
            <option value="">Choose...</option>
            {countries.map((countrty, index) => (
              <option value={countrty.code} key={countrty.code}>{countrty.name}</option>
            ))}
          </select>
          <small
            className={
              errors && errors["country"] ? "text-muted" : "d-block text-muted"
            }
          >
            {errors["country"] && errors["country"]["message"]}
          </small>
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className={
              errors["city"] ? "bg-warning form-control" : "form-control "
            }
            id="city"
            name="city"
            readOnly={isSubmitted}
            ref={register({
              required: true,
              pattern: {
                value: /^[a-z ,.'-]+$/i,
                message: "A valid city is required",
              },
            })}
          />
          <small
            className={
              errors && errors["city"] ? "text-muted" : "d-block text-muted"
            }
          >
            {errors["city"] && errors["city"]["message"]}
          </small>
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="state">state</label>
          <input
            type="text"
            className={
              errors["state"] ? "bg-warning form-control" : "form-control "
            }
            id="state"
            name="state"
            readOnly={isSubmitted}
            ref={register({
              required: true,
            })}
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="zip">Zip/Post-code</label>
          <input
            type="text"
            className={
              errors["zip"] ? "bg-warning form-control" : "form-control "
            }
            id="zip"
            name="zip"
            readOnly={isSubmitted}
            ref={register({
              required: true,
              pattern: {
                value: /^[-@./#&+\w\s]*$/i,
                message: "A valid zip or postal code is required",
              },
            })}
          />
          <small
            className={
              errors && errors["zip"] ? "text-muted" : "d-block text-muted"
            }
          >
            {errors["zip"] && errors["zip"]["message"]}
          </small>
        </div>
      </div>
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="save-info"
          name="save-info"
          readOnly={isSubmitted}
          ref={register({
            required: false,
          })}
          value="save-info"
          onChange={() => setChecked(!checked)}
          checked={checked}
        />
        <label className="custom-control-label" htmlFor="save-info">
          Save this information for next time
        </label>
      </div>
      <hr className="mb-4" />
      <div class="d-grid gap-2">
      {<button
            className="btn btn-primary btn-lg btn-block" type="submit" disabled={!isValid}
          >
            {!isSubmitted && (
              <span>Continue</span>
            )}
            {isSubmitted && (
              <span
                className="spinner-border spinner-border-lg"
                role="status"
                aria-hidden="true"
              ></span>
            )}
          </button>}
          </div>
    </div>
 </form> 
 </div>
 );
};

BillingAddressCom.propTypes = {};

BillingAddressCom.defaultProps = {};

export default BillingAddressCom;
