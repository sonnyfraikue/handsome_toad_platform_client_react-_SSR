import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Domain.module.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const Domain = (props, ...rest) => {
  const { domain_id } = useParams();
  const [delegationObj, setDelegationObj] = useState([]);
  const purchasedDomains = useSelector((state) => state.purchasedDomains);
  const dispatch = useDispatch();
  const apiConfig = {
    headers: {
      "Authorization": `Bearer ${process.env.REACT_APP_FIREBASE_API_KEY}`,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const fetchDelegations = () => {
      return axios
        .get(
          process.env.REACT_APP_DNSIMPLE_DELEGATION_API_URL +
            `?domain_id=${domain_id}`,
            apiConfig
        )
        .then(({ data }) => {
          return data.data.data;
        })
        .catch(function (error) {
          return error;
        });
    };

    fetchDelegations(domain_id)
      .then((data) => {
        setDelegationObj(data);

        let newArray = purchasedDomains.map((each) => {
          return each.id === parseInt(domain_id)
            ? { ...each, delegation: data }
            : { ...each };
        });

        dispatch({
          type: "add-purchased-domain",
          payload: { purchasedDomains: newArray },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setDelegationObj]);

  return (
    <div className={`${styles.Domain} container mt-3 `}>
      <p className="lead">DNS Services</p>
      <div className="d-flex bd-highlight">
        <div className="p-2 w-50 bd-highlight">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Domain
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                DNS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                SSL Certificates
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Connections
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Email Forwarding
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                DNSSEC
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Members</a>
            </li>
          </ul>
        </div>
        <div className="bg-white text-dark p-4 flex-shrink-1 bd-highlight">
          <p className="lead">Domain delegation</p>
          <p>Name servers currently configured at the registry.</p>
          <ul>
            {delegationObj &&
              delegationObj.map((each, index) => <li key={index}>{each}</li>)}
          </ul>
          <div className="d-flex justify-content-between">
            <p className="p-2">Add secondary DNS</p>
            <Link className="p-2" to={`/domains/${domain_id}/edit-delegation`}>
              Edit delegation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Domain.propTypes = {};

Domain.defaultProps = {};

export default Domain;
