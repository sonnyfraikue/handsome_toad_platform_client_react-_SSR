import React from 'react';
import ReactDOM from 'react-dom';
import MyAccount from './MyAccount';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyAccount />, div);
  ReactDOM.unmountComponentAtNode(div);
});