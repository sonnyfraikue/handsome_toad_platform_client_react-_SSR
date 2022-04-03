import React, { lazy, Suspense } from 'react';

const LazyImageGen = lazy(() => import('./ImageGen'));

const ImageGen = props => (
  <Suspense fallback={null}>
    <LazyImageGen {...props} />
  </Suspense>
);

export default ImageGen;
