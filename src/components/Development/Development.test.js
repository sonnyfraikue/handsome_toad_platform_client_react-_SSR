import React from 'react';
import ReactDOM from 'react-dom';
import Development from './Development';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Development />, div);
  ReactDOM.unmountComponentAtNode(div);
});