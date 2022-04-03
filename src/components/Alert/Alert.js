import React, { useState } from 'react';
import Alert from "react-bootstrap/Alert";
import styles from "./Alert.module.scss";

const AlertDismissable = (props) => {
//VARIANTS 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'
  const onDismiss = () => props.toggler({isVisible:false, message:''});
  return (
    <Alert className={styles['alert-warning']} transition={false}  variant={props.color} show={props.isOpen} onClose={(onDismiss)} dismissible>
      {props.message} {props.showLink?<Alert.Link href={props.linkPath}>{props.linkName}</Alert.Link>:null}
    </Alert>
  );
}

export default AlertDismissable;