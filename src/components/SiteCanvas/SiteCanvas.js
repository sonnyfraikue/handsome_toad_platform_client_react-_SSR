import React from 'react';
import PropTypes from 'prop-types';
import styles from './SiteCanvas.module.scss';


const SiteCanvas = ({features = [], deleteFeature}) => {


  return (
  <div className={styles.SiteCanvas+` col ml-3`}>

    <ul>
      {
        features.map((feature)=>(
          <li key={feature.id}><a onClick={()=>deleteFeature(feature)}>{feature.name} {feature.description}</a></li>
        ))
      }
    </ul>
  </div>
)};

SiteCanvas.propTypes = {};

SiteCanvas.defaultProps = {};

export default SiteCanvas;
