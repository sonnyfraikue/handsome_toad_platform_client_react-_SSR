import React from 'react';
import ReactDOM from 'react-dom';
import SiteTemplates from './SiteTemplates';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SiteTemplates />, div);
  ReactDOM.unmountComponentAtNode(div);
});