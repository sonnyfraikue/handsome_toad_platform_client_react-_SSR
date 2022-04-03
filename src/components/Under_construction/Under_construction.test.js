import React from 'react';
import ReactDOM from 'react-dom';
import Under_construction from './Under_construction';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Under_construction />, div);
  ReactDOM.unmountComponentAtNode(div);
});