import React from 'react';
import ReactDOM from 'react-dom';
import Domain from './Domain';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Domain />, div);
  ReactDOM.unmountComponentAtNode(div);
});