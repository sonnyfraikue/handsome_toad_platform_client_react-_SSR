import React from "react";
import PropTypes from "prop-types";
import styles from "./Clientslist.module.scss";

const Clientslist = () => (
  <section className={styles["logo-list"] + " row"}>
      <div className="col-sm pt-3">
        <h2 className="lead">Our clients.</h2>
      </div>
    <div className="d-flex justify-content-center align-items-center">
      {/* <div className="p-2">
        <img
          src="/images/shakespearesglobe-logo.png"
          alt="Shakespeare Globe logo"
        />
      </div> */}
      <div className="p-2">
        <img src="/images/sky-logo.png" alt="Sky logo" title="Sky logo" />
      </div>
      <div className="p-2">
        <img src="/images/condenast-logo.png" alt="condenast logo" title="condenast logo" />
      </div>
      <div className="p-2">
        <img src="/images/clinique-logo.png" alt="clinique logo" title="clinique logo" />
      </div>
      {/* <div className="p-2">
        <img src="/images/newsoftheworld-logo.png" alt="newsoftheworld logo" />
      </div> */}
      <div className="p-2">
        <img src="/images/riverisland-logo.png" alt="riverisland logo" title="riverisland logo" />
      </div>
      {/* <div className="p-2">
        <img
          src="/images/prodirectsports-logo.png"
          alt="prodirectsports logo"
        />
      </div> */}
      <div className="p-2">
        <img src="/images/apple-logo.png" alt="apple logo" title="apple logo" />
      </div>
      <div className="p-2">
        <img src="/images/tfgm-logo.png" alt="tfgm logo" title="tfgm logo" />
      </div>
      <div className="p-2">
        <img src="/images/tatler-logo.png" alt="tatler logo" title="tatler logo" />
      </div>
      {/* <div className="p-2">
        <img src="/images/movingbrands-logo.png" alt="movingbrands logo" />
      </div> */}
      <div className="p-2">
        <img src="/images/es-logo.png" alt="es logo" title="es logo" />
      </div>
      <div className="p-2">
        <img src="/images/savills-logo.png" alt="savills logo" title="savills logo" />
      </div>
      <div className="p-2">
        <img src="/images/txtnation-logo.png" alt="txtnation logo" title="txtnation logo" />
      </div>
      <div className="p-2">
        <img src="/images/gq-logo.png" alt="gq logo" title="gq logo" />
      </div>
    </div>


    <div className="col-sm mt-3">
        <h2 className="lead">Our partners.</h2>
      </div>

    <div className="row">
      <div className="col-lg-2 col-md-4 col-6">
        <a href="#">
          <img
            src="/images/bluehost-logo.png"
            className="img-fluid"
            alt="Bluehost logo"
            title="Bluehost logo"
          />
        </a>
      </div>
      <div className="col-lg-2 col-md-4 col-6">
        <a href="#">
          <img
            src="/images/hostgator-logo.png"
            className="img-fluid"
            alt="Hostgator logo"
            title="Hostgator logo"
          />
        </a>
      </div>
      <div className="col-lg-2 col-md-4 col-6">
        <a href="#">
          <img
            src="/images/greengeeks-logo.png"
            className="img-fluid"
            alt="Green Geeks logo"
            title="Green Geeks logo"
          />
        </a>
      </div>
      <div className="col-lg-2 col-md-4 col-6">
        <a href="#">
          <img
            src="/images/wordpress-logo.png"
            className="img-fluid"
            alt="WordPress logo"
            title="WordPress logo"
          />
        </a>
      </div>
      <div className="col-lg-2 col-md-4 col-6">
        <a href="#">
          <img
            src="/images/dreamhost-logo.png"
            className="img-fluid"
            alt="DreamHost logo"
            title="DreamHost logo"
          />
        </a>
      </div>
      <div className="col-lg-2 col-md-4 col-6">
        <a href="#">
          <img
            src="/images/hostinger-logo.png"
            className="img-fluid"
            alt="Hostinger logo"
            title="Hostinger logo"
          />
        </a>
      </div>
    </div>
  </section>
);

Clientslist.propTypes = {};

Clientslist.defaultProps = {};

export default Clientslist;
