import React from 'react';
import ReactDOM from 'react-dom';
import Static_website_domain from './Static_website_domain';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Static_website_domain />, div);
  ReactDOM.unmountComponentAtNode(div);
});