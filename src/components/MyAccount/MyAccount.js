import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyAccount.module.scss';
import BillingAddress from '../BillingAddress/BillingAddress';
import { useSelector } from "react-redux";

const MyAccount = ({history}) => {
  
  const locale = useSelector((state) => state.locale);
  return(
  <div className={`container ${styles.MyAccount}`}>
    <BillingAddress locale={locale} history={history} />
  </div>
)};

MyAccount.propTypes = {};

MyAccount.defaultProps = {};

export default MyAccount;
