import React from 'react';
import ReactDOM from 'react-dom';
import Website_app_development_team from './Website_app_development_team';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Website_app_development_team />, div);
  ReactDOM.unmountComponentAtNode(div);
});