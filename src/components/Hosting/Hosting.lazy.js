import React, { lazy, Suspense } from 'react';

const LazyHosting = lazy(() => import('./Hosting'));

const Hosting = props => (
  <Suspense fallback={null}>
    <LazyHosting {...props} />
  </Suspense>
);

export default Hosting;
