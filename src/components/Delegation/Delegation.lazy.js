import React, { lazy, Suspense } from 'react';

const LazyDelegation = lazy(() => import('./Delegation'));

const Delegation = props => (
  <Suspense fallback={null}>
    <LazyDelegation {...props} />
  </Suspense>
);

export default Delegation;
