import React from 'react';
import ReactDOM from 'react-dom';
import SimplePaypalCheckout from './SimplePaypalCheckout';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimplePaypalCheckout />, div);
  ReactDOM.unmountComponentAtNode(div);
});