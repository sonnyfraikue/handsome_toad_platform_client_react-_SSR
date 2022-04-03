import React, { lazy, Suspense } from 'react';

const LazyUnder_construction = lazy(() => import('./Under_construction'));

const Under_construction = props => (
  <Suspense fallback={null}>
    <LazyUnder_construction {...props} />
  </Suspense>
);

export default Under_construction;
