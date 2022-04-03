import React from 'react';
import ReactDOM from 'react-dom';
import MollieCheckout from './MollieCheckout';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MollieCheckout />, div);
  ReactDOM.unmountComponentAtNode(div);
});