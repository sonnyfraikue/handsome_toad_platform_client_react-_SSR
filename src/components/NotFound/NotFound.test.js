import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './NotFound';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotFound />, div);
  ReactDOM.unmountComponentAtNode(div);
});