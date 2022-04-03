import React, { lazy, Suspense } from 'react';

const LazyMyAccount = lazy(() => import('./MyAccount'));

const MyAccount = props => (
  <Suspense fallback={null}>
    <LazyMyAccount {...props} />
  </Suspense>
);

export default MyAccount;
