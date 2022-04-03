import React from 'react';
import ReactDOM from 'react-dom';
import Privacy from './Privacy';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Privacy />, div);
  ReactDOM.unmountComponentAtNode(div);
});