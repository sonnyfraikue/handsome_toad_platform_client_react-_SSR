import React, { lazy, Suspense } from 'react';

const LazyCheckout = lazy(() => import('./Checkout'));

const Checkout = props => (
  <Suspense fallback={null}>
    <LazyCheckout {...props} />
  </Suspense>
);

export default Checkout;
