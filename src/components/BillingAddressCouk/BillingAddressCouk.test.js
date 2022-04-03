import React from 'react';
import ReactDOM from 'react-dom';
import BillingAddressCouk from './BillingAddressCouk';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BillingAddressCouk />, div);
  ReactDOM.unmountComponentAtNode(div);
});