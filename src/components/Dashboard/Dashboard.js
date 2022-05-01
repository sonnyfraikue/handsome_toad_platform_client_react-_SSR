import ModalC from "../Modal/Modal";
import SiteCanvas from "../SiteCanvas/SiteCanvas";
import SiteFeatures from "../SiteFeatures/SiteFeatures";
import SiteTemplates from "../SiteTemplates/SiteTemplates";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = ({history}) => {
  const dispatch = useDispatch();
  const features = useSelector((state) => state.currentFeatures);
  const modal = useSelector((state) => state.modal);
  const deleteFeature = (feature) => {
    dispatch({ type: "removeFeature", payload: feature });
  };

  const handleClose = () => {
    dispatch({
      type: "closeModal",
      payload: { iframeUrl: null, content: null, show: false },
    });
  };
  const handleShow = (url) => {
    dispatch({
      type: "launchModal",
      payload: { iframeUrl: url, content: null, show: true },
    });
  };
  /*
<Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      
  */

  return (
    <div className="container-fluid mw-100">
      <div className="row">
        <SiteCanvas
          features={features}
          deleteFeature={deleteFeature}
        ></SiteCanvas>
        <SiteFeatures></SiteFeatures>
        <SiteTemplates openModal={handleShow}></SiteTemplates>
        <ModalC
          handleShow={modal.show}
          iframeUrl={modal.iframeUrl}
          closeModal={handleClose}
        ></ModalC>
      </div>
    </div>
  );
};

export default Dashboard;
