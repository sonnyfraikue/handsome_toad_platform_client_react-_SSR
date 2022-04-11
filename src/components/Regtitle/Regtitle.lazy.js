import React, { lazy, Suspense } from 'react';

const LazyRegtitle = lazy(() => import('./Regtitle'));

const Regtitle = props => (
  <Suspense fallback={null}>
    <LazyRegtitle {...props} />
  </Suspense>
);

export default Regtitle;
