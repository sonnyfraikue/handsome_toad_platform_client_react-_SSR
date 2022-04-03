import React, { lazy, Suspense } from 'react';

const LazyLandingpage = lazy(() => import('./Landingpage'));

const Landingpage = props => (
  <Suspense fallback={null}>
    <LazyLandingpage {...props} />
  </Suspense>
);

export default Landingpage;
