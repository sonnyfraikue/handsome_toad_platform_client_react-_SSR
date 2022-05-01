import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from './PrivateRoute.module.scss';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useSelector } from "react-redux";


const PrivateRoute = ({ Component, ...rest }) => {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <Route {...rest} render={(props) => {
      return !!currentUser ? <Component {...props} /> : <Redirect to={{pathname:'/login', state: {from:props.location}}} />;
    }} />

  )
};

export default PrivateRoute;
