import React, { lazy, Suspense } from 'react';

const LazyPrivacy = lazy(() => import('./Privacy'));

const Privacy = props => (
  <Suspense fallback={null}>
    <LazyPrivacy {...props} />
  </Suspense>
);

export default Privacy;
