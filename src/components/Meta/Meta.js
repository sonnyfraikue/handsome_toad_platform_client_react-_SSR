import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import styles from './Meta.module.scss';

const Meta = ({ogtitle,ogdescription, keywords, ogurl, ogtype, ogimage, canonical}) => (
  <div className={styles.Meta}>
    <Helmet>
        <title>{ogtitle}</title>
        <meta name="keywords" content={keywords}></meta>
        <meta
          property="og:title"
          content={ogtitle}
        />
        <meta
          property="og:description"
          name="description"
          content={ogdescription}
        />
        <meta
          property="og:image"
          content={ogimage}
        />
        <meta property="og:url" content={ogurl} />
        <meta property="og:type" content={ogtype} />
        <link rel="canonical" href={canonical} />
      </Helmet>
  </div>
);

Meta.propTypes = {};

Meta.defaultProps = {};

export default Meta;
