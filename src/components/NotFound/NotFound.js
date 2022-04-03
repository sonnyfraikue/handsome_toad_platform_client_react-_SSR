import React from 'react';
import PropTypes from 'prop-types';
import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="container card">
    <h1>Oops! </h1>
    <h3>Page not found! return <Link to="/">home</Link></h3>
  </div>
);

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;
