import React, { lazy, Suspense } from 'react';

const LazyTester = lazy(() => import('./Tester'));

const Tester = props => (
  <Suspense fallback={null}>
    <LazyTester {...props} />
  </Suspense>
);

export default Tester;
