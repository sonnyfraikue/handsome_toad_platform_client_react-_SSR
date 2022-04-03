import React from 'react';
import ReactDOM from 'react-dom';
import ImageGen from './ImageGen';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageGen />, div);
  ReactDOM.unmountComponentAtNode(div);
});