import React, { lazy, Suspense } from 'react';

const LazyMeta = lazy(() => import('./Meta'));

const Meta = props => (
  <Suspense fallback={null}>
    <LazyMeta {...props} />
  </Suspense>
);

export default Meta;
