import React, { lazy, Suspense } from 'react';

const LazyHead = lazy(() => import('./Head'));

const Head = props => (
  <Suspense fallback={null}>
    <LazyHead {...props} />
  </Suspense>
);

export default Head;
