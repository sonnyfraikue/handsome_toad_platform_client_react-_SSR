import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";
import { Button, Modal } from "react-bootstrap";
import Basket from "../components/Basket/Basket";
import { Link } from "react-router-dom";

const ModalC = ({
  handleShow = () => {},
  closeModal = () => {},
  modalTitle = null,
  modalContent = "",
  continueBtn = "Continue",
  continueBtnPath = "#",
  iframeUrl,
  ...rest
}) => {
  return(
  <Modal
    dialogClassName={styles.Modal}
    show={handleShow}
    onHide={closeModal}
    animation={false}
  >
    <Modal.Header closeButton={true}>
      {modalTitle && <Modal.Title className="ml-4"><p className="lead mb-0 pb-0">{modalTitle}</p></Modal.Title>}
    </Modal.Header>
    {!iframeUrl&&(<Modal.Body>{rest.children}</Modal.Body>)}
    {iframeUrl&&(<Modal.Body><iframe src={iframeUrl} title="W3Schools Free Online Web Tutorials"></iframe></Modal.Body>)}
    <Modal.Footer>
      <Link className="mr-3 btn btn-primary" to={continueBtnPath} onClick={closeModal}>
        {continueBtn}
      </Link>
    </Modal.Footer>
  </Modal>
)};

ModalC.propTypes = {};

ModalC.defaultProps = {};

export default ModalC;
