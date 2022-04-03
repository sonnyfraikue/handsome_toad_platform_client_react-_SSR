import React from 'react';
import styles from './Head.module.scss';
import Nav from 'components/Nav/Nav';
import logo from '../../assets/img/frog-1.png';


const Head = () => (

  <div className={styles.Nav}>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="50"/>
            The Handsome Toad
          </a>

          <Nav/>

        </div>
      </nav>
  </div>
);

Head.propTypes = {};

Head.defaultProps = {};

export default Head;
