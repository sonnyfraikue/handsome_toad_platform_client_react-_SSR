/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
// used for making the prop types of this component
import PropTypes from "prop-types";


class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <Row>
            <nav className="footer-nav">
              <ul>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/privacy">Privacy Policy</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/terms">Terms &#x00026; Conditions</Link>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <div className="copyright">
                Built with <a href="https://reactjs.org">React</a> and <a href="https://firebase.google.com/">Firebase</a>
                <i className="fa fa-heart heart" /> by The Handsome Toad Ltd &copy; {1900 + new Date().getYear()}
              </div>
            </div>
          </Row>
        </Container>
      </footer>

    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
