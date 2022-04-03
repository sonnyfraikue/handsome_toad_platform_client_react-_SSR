import React, { lazy, Suspense } from 'react';

const LazyPrivateRoute = lazy(() => import('./PrivateRoute'));

const PrivateRoute = props => (
  <Suspense fallback={null}>
    <LazyPrivateRoute {...props} />
  </Suspense>
);

export default PrivateRoute;
