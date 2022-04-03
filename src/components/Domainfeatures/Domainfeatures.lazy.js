import React, { lazy, Suspense } from 'react';

const LazyDomainfeatures = lazy(() => import('./Domainfeatures'));

const Domainfeatures = props => (
  <Suspense fallback={null}>
    <LazyDomainfeatures {...props} />
  </Suspense>
);

export default Domainfeatures;
