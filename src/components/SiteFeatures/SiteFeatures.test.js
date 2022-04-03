import React from 'react';
import ReactDOM from 'react-dom';
import SiteFeatures from './SiteFeatures';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SiteFeatures />, div);
  ReactDOM.unmountComponentAtNode(div);
});