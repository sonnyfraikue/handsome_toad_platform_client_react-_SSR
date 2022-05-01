import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Domains.module.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {config} from "../../../config";
import { Link } from "react-router-dom";


const Domains = ({history}) => {
  const currentUser = useSelector((state) => state.currentUser);
  const contact = useSelector((state) => state.contact);
  const purchasedDomains = useSelector((state) => state.purchasedDomains);
  const dispatch = useDispatch();
  const apiConfig = {
    headers: {
      "Authorization": `Bearer ${config.RAZZLE_FIREBASE_API_KEY}`,
      "Content-Type": "application/json",
    },
  };

  const fetchContacts = () => {
    return axios
      .get(config.RAZZLE_DNSIMPLE_GETCONS_API_URL,apiConfig)
      .then(({ data }) => {
        dispatch({
          type: "add-contact",
          payload: { contact: data.data.data[0] },
        });
        return data.data.data.find((each) => currentUser.email === each.email);
      })
      .catch(function (error) {
        return error;
      });
  };

  const fetchDomains = (registrant_id) => {
    
    return axios
      .get(config.RAZZLE_DNSIMPLE_FETCH_DOMAIN_API_URL + `?registrant_id=${registrant_id}`,apiConfig)
      .then(({ data }) => {
        return data.data.data;
      })
      .catch(function (error) {
        return error;
      });
  };

  useEffect(() => {
    
    if(contact.id){
      if(purchasedDomains.length > 0)
      return false;
      fetchDomains(contact["id"]).then((data)=>{
        dispatch({
          type: "add-purchased-domain",
          payload: { purchasedDomains: data },
        });
      })
    }else{
    fetchContacts().then((data) => {
      fetchDomains(data.length > 1 ? data : [data][0]["id"]).then((data)=>{
        dispatch({
          type: "add-purchased-domain",
          payload: { purchasedDomains: data },
        });
      })
    });
  }
  }, []);

  return (
    <div className={"container p-3 " + styles.Domains}>
      <h1 className="lead">My domains</h1>
      <div className="list-group">
        <Link
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Manage domains</h5>
          </div>
        </Link>
        {purchasedDomains.map((each,index) => {
          return (
            <Link to={`/domains/${each.id}`} className="list-group-item list-group-item-action" key={index}>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{each.name}</h5>
                <small className="text-muted">Created on {each.created_at}</small>
              </div>
              <p className="mb-1">Expires on {each.expires_on}.</p>
              <small className="text-muted">{each.auto_renew===true?"Auto-renew is ON":"Auto-renew is ON"}</small>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

Domains.propTypes = {};

Domains.defaultProps = {};

export default Domains;
