import React, { lazy, Suspense } from 'react';

const LazyTerms = lazy(() => import('./Terms'));

const Terms = props => (
  <Suspense fallback={null}>
    <LazyTerms {...props} />
  </Suspense>
);

export default Terms;
