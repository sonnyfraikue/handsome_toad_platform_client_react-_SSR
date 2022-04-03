import React from 'react';
import ReactDOM from 'react-dom';
import Clientslist from './Clientslist';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Clientslist />, div);
  ReactDOM.unmountComponentAtNode(div);
});