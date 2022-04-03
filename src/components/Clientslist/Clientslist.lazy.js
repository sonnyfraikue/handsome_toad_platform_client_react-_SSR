import React, { lazy, Suspense } from 'react';

const LazyClientslist = lazy(() => import('./Clientslist'));

const Clientslist = props => (
  <Suspense fallback={null}>
    <LazyClientslist {...props} />
  </Suspense>
);

export default Clientslist;
