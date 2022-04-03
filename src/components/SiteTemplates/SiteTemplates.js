import React from "react";
import PropTypes from "prop-types";
import styles from "./SiteTemplates.module.scss";
import { Card, Popover, OverlayTrigger, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Ellipsis from "react-make-ellipsis";

const state = {
  templates: [
    {
      id: 1,
      thumbnail: "/images/material-dashboard.png",
      description:
        "Material Dashboard, suitable for content management system or admin panel",
      name: "Material Dashboard",
      iframeUrl:
        "https://demos.creative-tim.com/material-dashboard/examples/dashboard.html?_ga=2.181044708.2129398913.1618499562-1433617276.1618499562",
    },
    {
      id: 2,
      thumbnail: "/images/now-ui.png",
      description:
        "Now UI, An elegant layout for full page sites and landing pages",
      name: "Now UI",
      iframeUrl: "https://demos.creative-tim.com/now-ui-kit/index.html",
    },
    {
      id: 3,
      thumbnail: "/images/light-bootstrap-dashboard.png",
      description:
        "Light Bootstrap Dashboard, suitable for content management system or admin panel",
      name: "Light Bootstrap Dashboard",
      iframeUrl:
        "https://demos.creative-tim.com/light-bootstrap-dashboard/examples/dashboard.html?_ga=2.185765354.2129398913.1618499562-1433617276.1618499562",
    },
    {
      id: 4,
      thumbnail: "/images/get-shit-done.png",
      description: "Get shit done, Lovely responsive full width layout",
      name: "Get shit done",
      iframeUrl:
        "https://demos.creative-tim.com/get-shit-done/index.html?_ga=2.81439188.2129398913.1618499562-1433617276.1618499562",
    },
    {
      id: 5,
      thumbnail: "/images/paper-kit.png",
      description:
        "It's different since it's not material, flat or iOS inspired. We hope the kit will help you make your mark and create something new.",
      name: "simple name",
      iframeUrl:
        "https://demos.creative-tim.com/bs3/paper-kit/index.html?_ga=2.115597765.2129398913.1618499562-1433617276.1618499562",
    },
    {
      id: 6,
      thumbnail: "/images/hotels.png",
      description:
        "Material bootstrap theme, Great template with lots of features* for hotels and bed & breakfasts.",
      name: "Material bootstrap - hotels",
      iframeUrl:
        "https://demos.creative-tim.com/material-bootstrap-wizard/wizard-book-room.html?_ga=2.76252630.2129398913.1618499562-1433617276.1618499562",
    },
    {
      id: 7,
      thumbnail: "/images/social.png",
      description:
        "Material bootstrap theme, Great template with lots of features* for social networking and dating sites",
      name: "Material bootstrap - social",
      iframeUrl:
        "https://demos.creative-tim.com/material-bootstrap-wizard/wizard-build-profile.html",
    },
  ],
};
//APPLY SHOULD DROP AN IMAGE OF THE LANDING PAGE WITH THE OPTION TO CREATE OTHER PAGES
//APPLY SHOULD DROP ALL THE MODIFIABLE COMPONENTS OF THE TEMPLATE ON THE PAGE
const popover = (content) => {
  return (
    <Popover id="popover-basic">
      <Popover.Content>{content}</Popover.Content>
    </Popover>
  );
};
const SiteTemplates = ({ openModal }) => {
  const dispatch = useDispatch();

  return (
    <div className="col col-12 col-md-2 pl-0 pr-0 ml-2">
      <div className={styles.SiteTemplates}>
        <ul className="list-group">
          <li
            className={
              styles["list-group-item-info"] +
              " list-group-item list-group-item-info justify-content-between"
            }
          >
            Templates{" "}
            <span className="badge badge-secondary badge-pill ml-1">
              {state.templates.length}
            </span>
          </li>
          {state.templates.map((template) => (
            <li
              key={template.id}
              className={styles["list-group-item"] + " list-group-item mb-2"}
            >
              <Card className={styles.card}>
                <Card.Img
                  className={styles["card-img-top"]}
                  variant="top"
                  src={template.thumbnail}
                />
                <Card.Body className={styles["card-body"]}>
                  <div className={styles["card-body"] + " card-body ml-0 mr-0"}>
                    <Card.Title className={styles["card-title"]}>
                      {template.name}
                    </Card.Title>

                    <OverlayTrigger
                      trigger="click"
                      placement="left"
                      overlay={
                        <Popover id="popover-basic">
                          <Popover.Content>
                            {template.description}
                          </Popover.Content>
                        </Popover>
                      }
                    >
                      <Card.Text className={styles["card-text"]}>
                        {template.description}
                      </Card.Text>
                    </OverlayTrigger>
                    <Card.Link
                      onClick={() => openModal(template.iframeUrl)}
                      className="btn btn-primary btn-block"
                    >
                    </Card.Link>

                    <Card.Link
                      onClick={() => {
                        dispatch({
                          type: "applyTemplate",
                          payload: template,
                        });
                      }}
                      className="btn btn-outline-primary btn-block ml-0"
                    >
                      Apply
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

SiteTemplates.propTypes = {};

SiteTemplates.defaultProps = {};

export default SiteTemplates;
