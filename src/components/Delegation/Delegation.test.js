import React from 'react';
import ReactDOM from 'react-dom';
import Delegation from './Delegation';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Delegation />, div);
  ReactDOM.unmountComponentAtNode(div);
});