import React, { lazy, Suspense } from 'react';

const LazyCreditCard = lazy(() => import('./CreditCard'));

const CreditCard = props => (
  <Suspense fallback={null}>
    <LazyCreditCard {...props} />
  </Suspense>
);

export default CreditCard;
