import React, { lazy, Suspense } from 'react';

const LazyStatic_website_domain = lazy(() => import('./Static_website_domain'));

const Static_website_domain = props => (
  <Suspense fallback={null}>
    <LazyStatic_website_domain {...props} />
  </Suspense>
);

export default Static_website_domain;
