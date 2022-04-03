import React, { lazy, Suspense } from 'react';

const LazySiteCanvas = lazy(() => import('./SiteCanvas'));

const SiteCanvas = props => (
  <Suspense fallback={null}>
    <LazySiteCanvas {...props} />
  </Suspense>
);

export default SiteCanvas;
