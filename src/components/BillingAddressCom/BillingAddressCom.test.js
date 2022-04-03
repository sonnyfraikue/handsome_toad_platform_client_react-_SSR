import React from 'react';
import ReactDOM from 'react-dom';
import BillingAddressCom from './BillingAddressCom';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BillingAddressCom />, div);
  ReactDOM.unmountComponentAtNode(div);
});