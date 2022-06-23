import React from "react";
import PropTypes from "prop-types";
import styles from "./Pricing.module.scss";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";

const Pricing = (props) => {
  const locale = useSelector((state) => state.locale);
  return (
    <div className={styles.Pricing}>
      <div className="container d-flex flex-wrap justify-content-around align-items-top">
        {parseInt(props.option) === 1 && (
          <div className="card-deck mb-3 text-center d-flex flex-wrap justify-content-around align-items-top">
            <div className={`${styles.card} card mb-4 box-shadow`}>
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Free</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h2 className="card-title pricing-card-title">
                  {currencyFormatter.format(0, {
                    code: locale.currency,
                  })}
                  <small className="text-muted">/ mo</small>
                </h2>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Page builder GUI</li>
                  <li>500 MB of storage</li>
                  <li>Email support</li>
                  <li>Domain services</li>
                </ul>
                <a
                  href="register/BronzePlan/Free"
                  title="register BronzePlan Free"
                  className={`${styles['btn-outline-primary']} mt-auto btn btn-lg btn-block btn-outline-primary`}
                >
                  Sign up for free
                </a>
              </div>
            </div>
           
            <div className={`${styles.card} card mb-4 box-shadow`}>
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Enterprise</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h2 className="card-title pricing-card-title">
                {currencyFormatter.format(70, {
                    code: locale.currency,
                  })} <small className="text-muted">/ mo</small>
                </h2>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Page builder GUI</li>
                  <li>Domain services</li>
                  <li>30 users included</li>
                  <li>70 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <a
                  href="register/BronzePlan/Enterprise"
                  title="register BronzePlan Enterprise"
                  className={`${styles['btn-primary']} mt-auto btn btn-lg btn-block btn-primary`}
                >
                  Get started
                </a>
              </div>
            </div>


            <div className={`${styles.card} card mb-4 box-shadow align-items-center`}>
            <img
            width="300"
            src="/images/template_two_ladies.png"
            className="rounded img-thumbnail"
            alt="website builder template of two ladies"
            title="website builder template of two ladies"
          />
            </div>
            
          </div>
        )}

        {parseInt(props.option) === 2 && (
          <div className="card-deck mb-3 text-center">
            <div className={`${styles.card} card mb-4 box-shadow`}>
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Enterprise</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h2 className="card-title pricing-card-title">
                {currencyFormatter.format(1110, {
                    code: locale.currency,
                  })}* <small className="text-muted">/ mo</small>
                </h2>
                <ul className="list-unstyled mt-3 mb-4">
                  {/* <li>Page builder GUI</li> */}
                  <li>Domain services</li>
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Development team* support</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <a
                  href="/register/Goldplan/Enterprise"
                  title="register Goldplan Enterprise"
                  className={`${styles['btn-primary']} mt-auto btn btn-lg btn-block btn-primary`}
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        )}

        {parseInt(props.option) === 3 && (
          <div className="card-deck mb-3 text-center">
            <div className={`${styles.card} card mb-4 box-shadow`}>
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Enterprise</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <small>Starts from</small>
                <h2 className="card-title pricing-card-title">
                {currencyFormatter.format(2735, {
                    code: locale.currency,
                  })}* <small className="text-muted">/ mo</small>
                </h2>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Domain services</li>
                  <li>Unlimited users included</li>
                  <li>10 TB of storage (additional storage available)</li>
                  <li>Project Manager</li>
                  <li>Development team* support</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <a
                  href="/register/DiamondPlan/Enterprise"
                  title="Diamond plan Enterprise"
                  className={`${styles['btn-primary']} mt-auto btn btn-lg btn-block btn-primary`}
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Pricing.propTypes = {};

Pricing.defaultProps = {};

export default Pricing;
