import React from 'react';
import ReactDOM from 'react-dom';
import Landingpage from './Landingpage';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Landingpage />, div);
  ReactDOM.unmountComponentAtNode(div);
});