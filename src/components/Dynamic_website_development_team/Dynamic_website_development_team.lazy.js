import React, { lazy, Suspense } from 'react';

const LazyDynamic_website_development_team = lazy(() => import('./Dynamic_website_development_team'));

const Dynamic_website_development_team = props => (
  <Suspense fallback={null}>
    <LazyDynamic_website_development_team {...props} />
  </Suspense>
);

export default Dynamic_website_development_team;
