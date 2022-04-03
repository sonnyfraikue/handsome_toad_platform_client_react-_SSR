import React, { lazy, Suspense } from 'react';

const LazyDevelopment = lazy(() => import('./Development'));

const Development = props => (
  <Suspense fallback={null}>
    <LazyDevelopment {...props} />
  </Suspense>
);

export default Development;
