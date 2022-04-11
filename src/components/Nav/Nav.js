import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/THT_fullcolour_Text.svg";
import styles from "./Nav.module.scss";
import app from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import CountrySelect from "react-bootstrap-country-select";
import ModalC from "../Modal/Modal";
import Basket from "../Basket/Basket";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
import countriesJson from "../../countries.json";
import countries from "@doubco/countries";
import {config} from "../../../config";

const Nav = ({ history }) => {
  const currentUser = useSelector((state) => state.currentUser);
  const locale = useSelector((state) => state.locale);
  const basket = useSelector((state) => state.basket.domains);
  const suggestedDomains = useSelector((state) => state.suggestedDomains);
  const searchedDomain = useSelector((state) => state.searchedDomain);
  const dispatch = useDispatch();
  const [toggler, setTogglerState] = useState({
    isVisible: false,
  });
  const tempCC = locale.cc ? locale.cc.toLowerCase() : "us";
  const [value, setValue] = useState(tempCC);
  const excludedCountries = [];
  let filteredCountries = countriesJson.filter((each) => {
    if (
      each.CC === "AF" ||
      each.CC === "AS" ||
      each.CC === "OC" ||
      each.CC === "AN" ||
      each.CC === "SA"
    ) {
      return excludedCountries.push(each["a-2"].toLowerCase());
    }
  });

  const handleCountryChange = (value) => {
    setValue(value);
    if (value === null) return;
    const capCC = value.alpha2.toUpperCase();
    const apiConfig = {
      headers: {
        Authorization: `Bearer ${config.RAZZLE_FIREBASE_API_KEY}`,
        "Content-Type": "application/json",
      },
    };
    axios
      .get(
        config.RAZZLE_ABSTRACTAPI_VATRATE_API_URL +
          `?country_code=${capCC}`,
        apiConfig
      )
      .then((data) => {
        console.log(data)
        let localeObj = countries.data[capCC];
        let rateObj = data.data.err
          ? []
          : data.data.data.filter((each) => each.category === "standard");
        dispatch({
          type: "locale",
          payload: {
            locale: {
              currency: localeObj.currency,
              languange: localeObj.languages[0] + "_" + capCC,
              domain:
                process.env.NODE_ENV === "development"
                  ? "http://localhost:3000/"
                  : config.RAZZLE_DOMAIN,
              code: localeObj.code,
              taxrate: data.data.err ? null : rateObj[0].rate * 100,
              cc: capCC,
            },
          },
        });
        axios
          .get(
            config.RAZZLE_EXCHANGE_RATE_API_URL +
              `?from=${suggestedDomains[0].pricing.currency}&to=${localeObj.currency}&amount=${searchedDomain.data.registration_price}`
          )
          .then((data) => {
            let newPrice = data.data.result;
            dispatch({
              type: "domain-search",
              payload: {
                domainSearch: {
                  data: {
                    registration_price: newPrice,
                    domain: searchedDomain.data.domain,
                    premium: searchedDomain.data.premium,
                    renewal_price: searchedDomain.data.renewal_price,
                    transfer_price: searchedDomain.data.transfer_price,
                  },
                },
              },
            });
          })
          .catch((error) => {
            console.log(error);
          });
        dispatch({
          type: "domain-suggest-reset",
          payload: {},
        });
        dispatch({
          type: "empty-basket",
          payload: {},
        });
        suggestedDomains.map((each, index) => {
          axios
            .get(
              config.RAZZLE_EXCHANGE_RATE_API_URL +
                `?from=${each.pricing.currency}&to=${localeObj.currency}&amount=${each.availability.data.registration_price}`
            )
            .then((data) => {
              dispatch({
                type: "domain-suggest",
                payload: {
                  domainSuggest: {
                    availability: {
                      data: {
                        registration_price: data.data.result,
                        domain: each.availability.data.domain,
                        premium: each.availability.data.premium,
                        renewal_price: each.availability.data.renewal_price,
                        transfer_price: each.availability.data.transfer_price,
                      },
                    },
                    pricing: {
                      available: each.pricing.available,
                      currency: localeObj.currency,
                      definitive: each.pricing.definitive,
                      domain: each.pricing.domain,
                      period: each.pricing.period,
                      price: each.pricing.price,
                    },
                  },
                },
              });

              return data.data;
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
        // dispatch({
        //   type: "locale",
        //   payload: {
        //     locale: {
        //       currency: "USD",
        //       languange: "en_GB",
        //       domain:
        //         process.env.NODE_ENV === "development"
        //           ? "http://localhost:3000/"
        //           : config.RAZZLE_DOMAIN,
        //       code: "+1",
        //       vatrate: null,
        //       cc: "US",
        //     },
        //   },
        // });
      });
  };

  const setToggler = () => {
    setTogglerState({ isVisible: !toggler.isVisible });
  };
  const onSubmit = () => {
    app
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "logout",
          payload: null,
        });
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const modal = useSelector((state) => state.modal);

  const handleClose = () => {
    dispatch({
      type: "closeModal",
      payload: { iframeUrl: null, content: null, show: false },
    });
  };
  const handleShow = (url) => {
    dispatch({
      type: "launchModal",
      payload: { iframeUrl: url, content: null, show: true },
    });
  };

  return (
    <div>
      <nav
        className={"pt-2 navbar navbar-expand-lg navbar-light " + styles["Nav"]}
      >
        <div className="container-fluid">
          <Link title="Home" to="/" onClick={() => setTogglerState({ isVisible: false })}>
            <img src={logo} alt="handsometoad logo" width="120" title="handsometoad logo" />
          </Link>
          <button
            className={`${styles['navbar-toggler']} navbar-toggler`}
            data-bs-toggle="collapse"
            type="button"
            data-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              return setToggler();
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={
              toggler.isVisible
                ? `show collapse navbar-collapse`
                : `collapse navbar-collapse ${styles["navbar-collapse"]}`
            }
            id="navbarNavDropdown"
          >
            <ul className={`${styles["navbar-nav"]} nav navbar-nav ml-4`}>
              <li
                className={
                  styles["dropdown-menu"] +
                  " " +
                  styles["nav-item"] +
                  " dropdown nav-item"
                }
              >
                <Link
                  className={"nav-link dropdown-toggle " + styles["nav-link"]}
                  id="navbarDropdownMenuLinkProducts"
                  to="#"
                >
                  Products
                </Link>
                <ul
                  className={styles["dropdown-menu"] + " dropdown-menu"}
                  aria-labelledby="navbarDropdownMenuLinkProducts"
                >
                  <li>
                    <a
                      className={styles["dropdown-item"] + ` dropdown-item ${styles["nav-link"]}`}
                      href="/Static website & domain"
                      title="Static website & domain"
                    >
                      Website builder & domain
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles["dropdown-item"] + " dropdown-item"}
                      href="/Dynamic website + development team"
                      title="Dynamic website + development team"
                    >
                      Dynamic website + development team
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles["dropdown-item"] + " dropdown-item"}
                      href="Website + app + development team"
                      title="Website + app + development team"
                    >
                      Website + app + development team
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex">
              <ul className="nav navbar-nav">
                {currentUser && process.env.NODE_ENV !== "production" ? (
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${styles["nav-link"]}`}
                      to="/dashboard"
                      title="dashboard"
                      onClick={() => setTogglerState({ isVisible: false })}
                    >
                      Dashboard
                    </Link>
                  </li>
                ) : (
                  ""
                )}
                {parseInt(basket.length) > 0 ? (
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${styles["nav-link"]}`}
                      to="#"
                      onClick={() => {
                        handleShow();
                        setTogglerState({ isVisible: false });
                      }}
                    >
                      Basket
                      <div
                        className={`${styles.badge} ${styles.pulsate}  bg-primary`}
                      >
                        {basket.length}
                      </div>
                    </Link>
                  </li>
                ) : (
                  ""
                )}
                {currentUser && process.env.NODE_ENV !== "production" ? (
                  <li className="nav-item">
                    <Link className={`nav-link ${styles["nav-link"]}`} title="my-account" to="/my-account">
                      My Account
                    </Link>
                  </li>
                ) : (
                  ""
                )}

                {currentUser ? (
                  <li className="nav-item">
                    <Link className={`nav-link ${styles["nav-link"]}`} title="domains" to="/domains">
                      My Domains
                    </Link>
                  </li>
                ) : (
                  ""
                )}
                <li className="nav-item">
                  {!currentUser ? (
                    <Link
                      className={`nav-link ${styles["nav-link"]}`}
                      to="/register"
                      title="register"
                      onClick={() => {
                        setTogglerState({ isVisible: false });
                      }}
                    >
                      Sign up
                    </Link>
                  ) : (
                    ""
                  )}
                </li>
                <li className="nav-item">
                  {!currentUser ? (
                    <Link
                      className={`nav-link ${styles["nav-link"]}`}
                      to="/login"
                      title="login"
                      onClick={() => {
                        setTogglerState({ isVisible: false });
                      }}
                    >
                      Sign in
                    </Link>
                  ) : (
                    <a className={`nav-link ${styles["nav-link"]}`} href="#" onClick={onSubmit}>
                      Sign out
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="nav navbar-na">
              <li className={`${styles.countrySelect} nav-item pull-right`}>
                <CountrySelect
                  exclusions={excludedCountries}
                  value={value}
                  onChange={handleCountryChange}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {!modal.iframeUrl && (
        <ModalC
          modalTitle="Basket"
          handleShow={modal.show}
          closeModal={handleClose}
          continueBtn="Checkout"
          continueBtnPath="/checkout"
        >
          <Basket data={basket} />
        </ModalC>
      )}
    </div>
  );
};

export default Nav;
