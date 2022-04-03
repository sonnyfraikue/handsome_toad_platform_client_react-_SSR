import React from 'react';
import ReactDOM from 'react-dom';
import Payment from './Payment';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Payment />, div);
  ReactDOM.unmountComponentAtNode(div);
});