import React from 'react';
import PropTypes from 'prop-types';
import styles from './Payment.module.scss';
import CreditCard from '../CreditCard/CreditCard';

const Payment = () => (
  <div className="container card mt-3">
    <p className="lead">Payment</p>
    <CreditCard />
  </div>
);

Payment.propTypes = {};

Payment.defaultProps = {};

export default Payment;
