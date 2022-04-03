import React, { lazy, Suspense } from 'react';

const LazyDomains = lazy(() => import('./Domains'));

const Domains = props => (
  <Suspense fallback={null}>
    <LazyDomains {...props} />
  </Suspense>
);

export default Domains;
