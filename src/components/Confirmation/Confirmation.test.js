import React from 'react';
import ReactDOM from 'react-dom';
import Confirmation from './Confirmation';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Confirmation />, div);
  ReactDOM.unmountComponentAtNode(div);
});