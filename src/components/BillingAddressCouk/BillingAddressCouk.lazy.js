import React, { lazy, Suspense } from 'react';

const LazyBillingAddressCouk = lazy(() => import('./BillingAddressCouk'));

const BillingAddressCouk = props => (
  <Suspense fallback={null}>
    <LazyBillingAddressCouk {...props} />
  </Suspense>
);

export default BillingAddressCouk;
