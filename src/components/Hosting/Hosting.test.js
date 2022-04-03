import React from 'react';
import ReactDOM from 'react-dom';
import Hosting from './Hosting';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hosting />, div);
  ReactDOM.unmountComponentAtNode(div);
});