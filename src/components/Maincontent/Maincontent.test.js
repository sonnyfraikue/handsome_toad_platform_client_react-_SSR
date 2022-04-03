import React from 'react';
import ReactDOM from 'react-dom';
import Maincontent from './Maincontent';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Maincontent />, div);
  ReactDOM.unmountComponentAtNode(div);
});