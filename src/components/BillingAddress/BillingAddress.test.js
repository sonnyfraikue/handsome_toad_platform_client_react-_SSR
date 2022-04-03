import React from 'react';
import ReactDOM from 'react-dom';
import BillingAddress from './BillingAddress';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BillingAddress />, div);
  ReactDOM.unmountComponentAtNode(div);
});