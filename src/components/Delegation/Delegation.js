import React from "react";
import PropTypes from "prop-types";
import styles from "./Delegation.module.scss";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Delegation = () => {
  const purchasedDomains = useSelector((state) => state.purchasedDomains);
  const locale = useSelector((state) => state.locale);
  const { domain_id } = useParams();
  const delegationObj = purchasedDomains.filter(
    (each) => each.id === parseInt(domain_id)
  );
  return (
    <div className={`${styles.Delegation} container mt-3 `}>
      <p className="lead">DNS Services</p>
      <div className="d-flex bd-highlight">
        <div className="p-2 w-50 bd-highlight"></div>
        <div className="bg-white text-dark p-4 flex-shrink-1 bd-highlight">
          <p className="lead">Change name servers</p>
          <p>
            If you would like to use name servers other than {locale.domain}{" "}
            name servers you may enter them here. Please note that this only
            works for domains that have been registered with or transferred into{" "}
            {locale.domain}.
          </p>
          <p className="muted">
            Note that you should only use host names for name servers. Do not
            use IP addresses.
          </p>
          <form onSubmit={() => "hello"}>
            {delegationObj &&
              delegationObj[0].delegation.map((each, index) => (
                <div key={index} className="mb-3">
                  <label htmlFor={each} className="form-label">
                    Name server {index + 1}
                  </label>
                  <input
                    type={`text`}
                    id={each}
                    defaultValue={each}
                    className={`form-control`}
                    aria-describedby={`${index}nsHelp`}
                  />
                  <div id={`${index}nsHelp`} className="d-none form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
              ))}
          </form>
          <div className="d-flex justify-content-end">
            <Link to={`./`} className={`btn`}>
            Cancel
            </Link>
            <button type="submit" className="btn btn-primary">
                Update name servers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Delegation.propTypes = {};

Delegation.defaultProps = {};

export default Delegation;
