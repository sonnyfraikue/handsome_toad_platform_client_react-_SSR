import React from 'react';
import PropTypes from 'prop-types';
import styles from './Development.module.scss';

const Development = () => (
  <div className={"card container "+styles.Development}>
    Development Component
  </div>
);

Development.propTypes = {};

Development.defaultProps = {};

export default Development;
