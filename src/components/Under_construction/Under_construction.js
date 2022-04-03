import React from 'react';
import PropTypes from 'prop-types';
import styles from './Under_construction.module.scss';
import construction from "../../assets/img/cement_mixer_truck_static.svg";

const Under_construction = () => (
  <div className={'container card '+styles.Under_construction}>
    <h3>... we'll let you know when we go live!</h3>
    <p className='lead'>In the meantime feel free to secure a domain for that project <a href='/'>Get it</a> </p>
    <img src={construction} alt=""  />
  </div>
);

Under_construction.propTypes = {};

Under_construction.defaultProps = {};

export default Under_construction;
