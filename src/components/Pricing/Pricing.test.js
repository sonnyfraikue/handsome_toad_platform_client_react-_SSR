import React from 'react';
import ReactDOM from 'react-dom';
import Pricing from './Pricing';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pricing />, div);
  ReactDOM.unmountComponentAtNode(div);
});