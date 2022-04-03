import React from 'react';
import ReactDOM from 'react-dom';
import Dynamic_website_development_team from './Dynamic_website_development_team';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dynamic_website_development_team />, div);
  ReactDOM.unmountComponentAtNode(div);
});