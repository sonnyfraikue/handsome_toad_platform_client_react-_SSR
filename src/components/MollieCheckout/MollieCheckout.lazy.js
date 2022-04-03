import React, { lazy, Suspense } from 'react';

const LazyMollieCheckout = lazy(() => import('./MollieCheckout'));

const MollieCheckout = props => (
  <Suspense fallback={null}>
    <LazyMollieCheckout {...props} />
  </Suspense>
);

export default MollieCheckout;
