import React, { lazy, Suspense } from 'react';

const LazySimplePaypalCheckout = lazy(() => import('./SimplePaypalCheckout'));

const SimplePaypalCheckout = props => (
  <Suspense fallback={null}>
    <LazySimplePaypalCheckout {...props} />
  </Suspense>
);

export default SimplePaypalCheckout;
