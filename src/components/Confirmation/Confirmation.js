import React from "react";
import PropTypes from "prop-types";
import styles from "./Confirmation.module.scss";
import { useSelector } from "react-redux";

const Confirmation = () => {
const contact = useSelector((state) => state.contact);
document.title = "Confirmation - Thanks for your custom."

  return(
  <div className={styles.Confirmation}>
    <div className={`${styles.jumbotron} jumbotron text-center`}>
      <h1 className="display-3">Thank You!</h1>
      <p className="lead">
        We've emailed a confirmation of your order to <strong>{contact.email}</strong>. Now go ahead and be fantastic!
      </p>
      <hr />
      <p>
        Having trouble? <a href="/contact">Contact us</a>
      </p>
      <p className="lead">
      <a href="/login" className="link-primary">Manage</a> your account.
      </p>
    </div>
  </div>
)};

Confirmation.propTypes = {};

Confirmation.defaultProps = {};

export default Confirmation;
