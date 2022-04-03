import React, { lazy, Suspense } from 'react';

const LazyMaincontent = lazy(() => import('./Maincontent'));

const Maincontent = props => (
  <Suspense fallback={null}>
    <LazyMaincontent {...props} />
  </Suspense>
);

export default Maincontent;
