import React from 'react';
import ReactDOM from 'react-dom';
import Tester from './Tester';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tester />, div);
  ReactDOM.unmountComponentAtNode(div);
});