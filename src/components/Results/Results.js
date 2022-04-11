import React from "react";
import PropTypes from "prop-types";
import styles from "./Results.module.scss";
import DomainSearch from "../DomainSearch/DomainSearch";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { useLocation } from "react-router-dom";

const Results = (props) => {
  const searchedDomain = useSelector((state) => state.searchedDomain);
  const locale = useSelector((state) => state.locale);
  const pricedDomain = useSelector((state) => state.pricedDomain);
  const suggestedDomains = useSelector((state) => state.suggestedDomains);
  const dispatch = useDispatch();

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const addToBasket = (domainObj, priceObj) => {
    dispatch({
      type: "add-domain-to-basket",
      payload: { domain: { ...domainObj, ...priceObj } },
    });
  };

  return (
    <div className={styles.Results + " container card mt-3"}>
      <DomainSearch
        domainTitle="Easy domain management."
        domainLead="Bulk purchases supported, just search and add."
        redirector={false}
        formVal={searchedDomain.data.domain}
        query={useQuery()}
      />

      {pricedDomain && pricedDomain.data.available && (
        <div
          className={styles.alertSuccess + ` alert bg-secondary`}
          role="alert"
        >
          <h4 className="alert-heading">We have great news!</h4>
          <h5>
            <b>{searchedDomain.data.domain}</b> is available!
          </h5>
          <hr />
          <h4 className="mb-0 pull-left">
            <b>
              {currencyFormatter.format(
                searchedDomain.data.registration_price,
                {
                  code: locale.currency,
                }
              )}
            </b>{" "}
            per year every year... no tricks.
            {/* See our guide to choosing a domain <a className="link-primary" href="#">here</a>. */}
          </h4>
          <a
            href="#top"
            onClick={() => addToBasket(searchedDomain.data, pricedDomain.data)}
            className={`${styles.addCart} pull-right btn btn-primary`}
          >
            <i className="bi bi-cart-plus"></i>
          </a>
        </div>
      )}
      {searchedDomain.err && (
        <div
          className={styles.alertSecondary + ` alert alert-secondary`}
          role="alert"
        >
          <h4 className="alert-heading">Aww no!</h4>
          <h5>Please make sure your input is valid.</h5>
          <hr />
          <p className="mb-0">
            See our guide to choosing a domain{" "}
            <a className="link-primary" href="#">
              here
            </a>
            .
          </p>
        </div>
      )}
      <div className={`${styles.suggestions} mb-5 mt-3 bg-gradient`}>
        <div className="d-flex w-100 justify-content-between">
          <p className="lead mb-1">
            Some {searchedDomain.data.available && "more"} suggestions...
          </p>
        </div>
        {suggestedDomains.length === 0 && (
          <span
            className="spinner-border spinner-border-lg mt-3"
            role="status"
            aria-hidden="true"
          ></span>
        )}
        <ol className="list-group list-group-numbered">
          {suggestedDomains &&
            suggestedDomains.map((eachDomain, index) => (
              <li
                key={index}
                className={`${styles["list-item"]} list-group-item d-flex justify-content-between align-items-center`}
              >
                <div className={`${styles["left-list"]} p-2 bd-highlight`}>
                  <h1 className={`${styles.title} lead`}>
                    www.{eachDomain.pricing.domain}
                    {eachDomain.availability.data.premium && (
                      <div
                        className={`${styles.badge} badge bg-primary rounded-pill`}
                      >
                        Premium
                      </div>
                    )}
                  </h1>
                </div>
                <div className={`${styles["right-list"]} p-2 bd-highlight`}>
                  <div className="d-flex align-items-end flex-column bd-highlight">
                    <div className="p-2 bd-highlight">
                      <a
                        href="#top"
                        onClick={() =>
                          addToBasket(
                            eachDomain.pricing,
                            eachDomain.availability.data
                          )
                        }
                        className={`${styles.addCartGrid} pull-right`}
                      >
                        <i className="bi bi-cart-plus"></i>
                      </a>
                    </div>
                    <div className="p-2 bd-highlight">
                      <span className={`${styles.price}`}>
                        {currencyFormatter.format(
                          eachDomain.availability.data.registration_price,
                          {
                            code: locale.currency,
                          }
                        )}
                        /yr
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          {suggestedDomains.length !== 0 && (
            <li className="list-group-item d-flex justify-content-center align-items-center">
              <a href="#top" className={`${styles["top-link"]}`}>
                <i className="bi bi-arrow-bar-up"></i>
                <p>Top</p>
              </a>
            </li>
          )}
        </ol>
      </div>
    </div>
  );
};

Results.propTypes = {};

Results.defaultProps = {};

export default Results;
