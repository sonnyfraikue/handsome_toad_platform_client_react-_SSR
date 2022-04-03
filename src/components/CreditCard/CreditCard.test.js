import React from 'react';
import ReactDOM from 'react-dom';
import CreditCard from './CreditCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreditCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});