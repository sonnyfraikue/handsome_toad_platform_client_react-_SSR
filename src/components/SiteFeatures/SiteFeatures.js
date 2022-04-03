import React from "react";
import PropTypes from "prop-types";
import styles from "./SiteFeatures.module.scss";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

const state = {
  features: [
    { id: 1, description: "feature 1", name: "simple name" },
    { id: 2, description: "feature 2", name: "simple name" },
    { id: 3, description: "feature 3", name: "simple name" },
    { id: 4, description: "feature 4", name: "simple name" },
    { id: 5, description: "feature 5", name: "simple name" },
  ],
};
const SiteFeatures = () => {
  const dispatch = useDispatch();
  return (
    <div className="col col-12 col-md-2 pl-0 pr-0 ml-2">
      <div className={styles.SiteFeatures}>
        <ul className="list-group">
        <li className={styles['list-group-item-info']+" list-group-item list-group-item-info justify-content-between"}>Features <span className="badge badge-secondary badge-pill ml-1">{state.features.length}</span></li>
          {state.features.map((feature) => (
            <li
              key={feature.id}
              className={styles["list-group-item"] + " list-group-item mb-2"}
            >
              <Card className={styles.card}>
              <Card.Img className={styles['card-img-top']} variant="top" src={`https://picsum.photos/id/1${feature.id}/200/90`} />
                <Card.Body className={styles["card-body"]}>
                  <div className={styles['card-body']+" card-body"}>
                  <Card.Title className={styles['card-title']}>{feature.name}</Card.Title>
                  <Card.Text className={styles['card-text']}>{feature.description}</Card.Text>
                  <Card.Link
                    onClick={() => {
                      dispatch({
                        type: "applyFeature",
                        payload: feature,
                      });
                    }}
                    className="btn btn-outline-primary btn-block"
                  >
                    Add
                  </Card.Link>
                  </div>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

SiteFeatures.propTypes = {};

SiteFeatures.defaultProps = {};

export default SiteFeatures;
