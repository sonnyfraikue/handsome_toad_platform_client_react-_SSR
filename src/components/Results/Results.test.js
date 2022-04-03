import React from 'react';
import ReactDOM from 'react-dom';
import Results from './Results';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Results />, div);
  ReactDOM.unmountComponentAtNode(div);
});