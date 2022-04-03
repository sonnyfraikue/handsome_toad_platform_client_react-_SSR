import React, { lazy, Suspense } from 'react';

const LazySiteTemplates = lazy(() => import('./SiteTemplates'));

const SiteTemplates = props => (
  <Suspense fallback={null}>
    <LazySiteTemplates {...props} />
  </Suspense>
);

export default SiteTemplates;
