import React from 'react';
import ReactDOM from 'react-dom';
import Meta from './Meta';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Meta />, div);
  ReactDOM.unmountComponentAtNode(div);
});