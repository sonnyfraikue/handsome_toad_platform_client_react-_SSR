import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./DomainSearch.module.scss";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {config} from "../../../config";

const DomainSearch = (props, ...rest) => {
  const { register, handleSubmit, formState } = useForm({
    mode: "all",
  });

  const { isValid, isDirty } = formState;
  let currentSuggestions;
  const apiConfig = {
    headers: {
      "Authorization": `Bearer ${config.RAZZLE_FIREBASE_API_KEY}`,
      "Content-Type": "application/json",
    },
  };

  const currentUser = useSelector((state) => state.currentUser);
  const searchedDomain = useSelector((state) => state.searchedDomain);
  const locale = useSelector((state) => state.locale);
  const dispatch = useDispatch();

  const [formErrors, setFormError] = useState({
    isVisible: false,
    message: "",
  });

  const [loadingObj, setLoadingObj] = useState({
    loading: false,
  });

  const [newFilteredSuggestion, setNewFilteredSuggestion] = useState([
    {
      availability: {},
      pricing: {}
    }
  ]);

  const onSubmit = useCallback(async (data) => {
    setLoadingObj({ loading: true });
    
    dispatch({
      type: "domain-suggest-reset",
      payload: { domainPrice: null },
    });
    let cleanedSearchStr = data.search.replace("www.", "");
    setFormError({ isVisible: false, message: "" });
    //start
    axios
      .get(
        config.RAZZLE_GODADDY_PRODUCTION_API_URL_SUGGEST +
          `?search=${cleanedSearchStr}`,
          apiConfig
      )
      .then(({ data }) => {
        currentSuggestions = data;
        axios
          .get(
            config.RAZZLE_GODADDY_PRODUCTION_API_URL_SEARCH +
              `?search=${cleanedSearchStr}`,
              apiConfig
          )
          .then(({ data }) => {
            if (!data.err) {
              dispatch({
                type: "domain-price",
                payload: { domainPrice: data },
              });
              if (!data.data.available) {
                setFormError({
                  isVisible: true,
                  message: "Sorry this is unavailable",
                });
              }
              const currentSuggestionsString = currentSuggestions.data.map(
                (each) => each.domain
              );
              //paste
              axios
                .post(config.RAZZLE_GODADDY_PRODUCTION_API_URL_SEARCH, {
                  search: currentSuggestionsString,
                },apiConfig)
                .then(({ data }) => {
                  let filteredData = data.data.domains.filter(
                    (each) => each.available === true
                  );

                  filteredData.filter((each, index) => {
                    //paste
                    return axios
                      .get(
                        config.RAZZLE_DNSIMPLE_PRODUCTION_API_URL_SEARCH +
                          `?search=${each.domain}`,
                          apiConfig
                      )
                      .then(({ data }) => {
                        if (
                          typeof data.data === "undefined" ||
                          data.data === "undefined"
                        )
                          return false;
                          let priceObj = data.data
                          let availabilityObj = [];
                          let pricingObj = [];
                         
                          return axios.get(config.RAZZLE_EXCHANGE_RATE_API_URL+`?from=USD&to=${locale.currency}&amount=${data.data.data.registration_price}`).then((data)=>{
                            priceObj.data.registration_price = data.data.result
                            each.currency = locale.currency;
                            availabilityObj.push(priceObj);
                            pricingObj.push(each)
                            dispatch({
                              type: "domain-suggest",
                              payload: { domainSuggest: {
                                availability: priceObj,
                                pricing: each
                              }},
                            });
                            return data.data;
                          }).catch((error)=>{
                            console.log(error)
                          })
                          


                      })
                      .catch(function (error) {
                        setFormError({
                          isVisible: true,
                          message: error.message,
                        });
                      });
                    //paste
                  });
                })
                .catch(function (error) {
                  console.log(error);
                  setLoadingObj({ loading: false });
                  setFormError({ isVisible: true, message: error.message });
                });
              //paste
            } else {
              dispatch({
                type: "domain-price",
                payload: { domainPrice: null },
              });
              setFormError({
                isVisible: true,
                message: data.err ? data.err.message : "unavailable",
              });
            }
          })
          .catch(function (error) {
            console.log(error);
            setLoadingObj({ loading: false });
            setFormError({ isVisible: true, message: error.message });
          });
      })
      .catch(function (error) {
        setFormError({ isVisible: true, message: error.message });
        setLoadingObj({ loading: false });
      });
    //end

    setLoadingObj({ loading: true });
    axios
      .get(
        config.RAZZLE_DNSIMPLE_PRODUCTION_API_URL_SEARCH +
          `?search=${cleanedSearchStr}`,apiConfig
      )
      .then(({ data }) => {
        const newData1 = data;
        if (!data.err) {
          axios.get(config.RAZZLE_EXCHANGE_RATE_API_URL+`?from=USD&to=${locale.currency}&amount=${data.data.data.registration_price}`).then((data)=>{
           let newPrice = data.data.result;
           newData1.data.data.registration_price = newPrice;
           dispatch({
            type: "domain-search",
            payload: { domainSearch: newData1.data },
          });
            
            return data.data;
          }).catch((error)=>{
            console.log(error)
          })

          
          if (props.redirector) {
            setLoadingObj({ loading: false });
              props.redirector("results");
          } else {
            setLoadingObj({ loading: false });
          }
        }
      })
      .catch(function (error) {
        setLoadingObj({ loading: false });
        setFormError({ isVisible: true, message: error.message });
      });
  });

  return (
    <div className={`${styles.DomainSearch}`}>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        {props.domainTitle && (
          <h5 className="font-weight-bold">{props.domainTitle}</h5>
        )}
        {props.domainAdvert && <h2 className="mb-0">{props.domainAdvert}</h2>}
        {props.domainLead && <p className="lead">{props.domainLead}</p>}

        <div className={styles.wrapper + " row input-group mb-3"}>
          <div className={`pl-0 col-auto pr-0`}>
            <label className="visually-hidden" htmlFor="search">
              Domain
            </label>
            <div className={styles.input_group + ` input-group`}>
              <div className={styles.input_group_text + ` input-group-text`}>
                www.
              </div>
              <input
                type="text"
                className={"form-control form-control-lg " + styles.Searchform}
                placeholder={props.domainFormPlaceholder}
                {...(!props.query.get("search") && {
                  defaultValue: props.formVal,
                })}
                {...(props.query.get("search") && {
                  defaultValue: props.query.get("search"),
                })}
                aria-label="Website domain"
                aria-describedby="basic-addon2"
                autoComplete="off"
                name="search"
                id="search"
                ref={register({
                  required: true,
                  pattern: {
                    value:
                      /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/,
                  },
                })}
              />
              <button
                className={
                  isValid
                    ? " " + styles.btn + " btn btn-primary " + styles.searchIcon
                    : styles.invalid + " " + styles.btn + " btn btn-primary"
                }
                id="basic-addon2"
                type="submit"
                disabled={!isValid}
              >
                {loadingObj.loading && (
                  <span
                    className="spinner-border spinner-border-lg"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
                {!loadingObj.loading && <i className="bi bi-search"></i>}
              </button>
            </div>
            <div>
              {!isValid && isDirty && (
                <span className={`${styles['bg-light']} text-danger bg-light mb-0 p-2`}>No spaces allowed, also remember to include .com .co.uk etc.
                </span>
              )}
            </div>
            {formErrors.isVisible && (
              <div className="text-light">
                <b>{formErrors.message}</b>
              </div>
            )}

            {formErrors.isVisible && (
              <div className="text-light">
                <span>
                  See our guide to choosing a domain{" "}
                  <a className="text-dark" href="#">
                    here
                  </a>
                  .
                </span>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default DomainSearch;
