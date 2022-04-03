import React, { lazy, Suspense } from 'react';

const LazyBillingAddressCom = lazy(() => import('./BillingAddressCom'));

const BillingAddressCom = props => (
  <Suspense fallback={null}>
    <LazyBillingAddressCom {...props} />
  </Suspense>
);

export default BillingAddressCom;
