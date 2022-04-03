import React from 'react';
import ReactDOM from 'react-dom';
import SiteCanvas from './SiteCanvas';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SiteCanvas />, div);
  ReactDOM.unmountComponentAtNode(div);
});