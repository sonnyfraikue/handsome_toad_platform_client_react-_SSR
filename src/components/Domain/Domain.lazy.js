import React, { lazy, Suspense } from 'react';

const LazyDomain = lazy(() => import('./Domain'));

const Domain = props => (
  <Suspense fallback={null}>
    <LazyDomain {...props} />
  </Suspense>
);

export default Domain;
