import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tile.module.scss';
import { Link } from 'react-router-dom';

const Tile = ({productName, productTitle, productDescription, ctaUrl}) => (
  <div className={'col-sm-3 ml-4 mr-4 card ' + styles.Tile}>
  <div>
    <div className={'Tile-body ' + styles['mh-50']}>
      <h6 className={styles['Tile-title']}>{productTitle}</h6>
      <p className="Tile-text">{productDescription} <Link to={ctaUrl}>Read more</Link>.</p>

    </div>
    <div className="Tile-footer mb-3">
      <Link to={'register/'+productName.replace(' ','')}>Continue</Link>
    </div>
  </div>
</div>
);

Tile.propTypes = {};

Tile.defaultProps = {};

export default Tile;
