import React, { lazy, Suspense } from 'react';

const LazySiteFeatures = lazy(() => import('./SiteFeatures'));

const SiteFeatures = props => (
  <Suspense fallback={null}>
    <LazySiteFeatures {...props} />
  </Suspense>
);

export default SiteFeatures;
