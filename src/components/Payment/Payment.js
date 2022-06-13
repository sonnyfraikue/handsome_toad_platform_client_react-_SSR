import React from 'react';
import PropTypes from 'prop-types';
import styles from './Payment.module.scss';
import CreditCard from '../CreditCard/CreditCard';

const Payment = () => (
  <div className="container card mt-3">
    <p className="lead mt-3 mb-0 pb-0">Payment <i className="bi bi-credit-card"></i></p>
    <p>Complete your purchase by providing your payment details.</p>
    <CreditCard />
  </div>
);

Payment.propTypes = {};

Payment.defaultProps = {};

export default Payment;
