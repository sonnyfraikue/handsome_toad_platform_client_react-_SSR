import React, { lazy, Suspense } from 'react';

const LazyPayment = lazy(() => import('./Payment'));

const Payment = props => (
  <Suspense fallback={null}>
    <LazyPayment {...props} />
  </Suspense>
);

export default Payment;
