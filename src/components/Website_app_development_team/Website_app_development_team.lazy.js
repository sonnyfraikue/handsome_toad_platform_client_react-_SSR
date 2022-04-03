import React, { lazy, Suspense } from 'react';

const LazyWebsite_app_development_team = lazy(() => import('./Website_app_development_team'));

const Website_app_development_team = props => (
  <Suspense fallback={null}>
    <LazyWebsite_app_development_team {...props} />
  </Suspense>
);

export default Website_app_development_team;
