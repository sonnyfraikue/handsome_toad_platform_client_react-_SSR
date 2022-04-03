import React from 'react';
import ReactDOM from 'react-dom';
import Head from './Head';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Head />, div);
  ReactDOM.unmountComponentAtNode(div);
});