import React, { lazy, Suspense } from 'react';

const LazyConfirmation = lazy(() => import('./Confirmation'));

const Confirmation = props => (
  <Suspense fallback={null}>
    <LazyConfirmation {...props} />
  </Suspense>
);

export default Confirmation;
