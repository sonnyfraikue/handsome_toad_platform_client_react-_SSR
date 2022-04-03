import React, { lazy, Suspense } from 'react';

const LazyBasket = lazy(() => import('./Basket'));

const Basket = props => (
  <Suspense fallback={null}>
    <LazyBasket {...props} />
  </Suspense>
);

export default Basket;
