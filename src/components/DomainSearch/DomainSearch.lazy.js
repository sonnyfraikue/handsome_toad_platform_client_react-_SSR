import React, { lazy, Suspense } from 'react';

const LazyDomainSearch = lazy(() => import('./DomainSearch'));

const DomainSearch = props => (
  <Suspense fallback={null}>
    <LazyDomainSearch {...props} />
  </Suspense>
);

export default DomainSearch;
