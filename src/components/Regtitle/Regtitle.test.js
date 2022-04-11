import React from 'react';
import ReactDOM from 'react-dom';
import Regtitle from './Regtitle';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Regtitle />, div);
  ReactDOM.unmountComponentAtNode(div);
});