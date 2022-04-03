import React from 'react';
import ReactDOM from 'react-dom';
import Domainfeatures from './Domainfeatures';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Domainfeatures />, div);
  ReactDOM.unmountComponentAtNode(div);
});