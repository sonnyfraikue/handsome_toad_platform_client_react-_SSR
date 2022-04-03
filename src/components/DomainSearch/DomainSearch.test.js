import React from 'react';
import ReactDOM from 'react-dom';
import DomainSearch from './DomainSearch';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DomainSearch />, div);
  ReactDOM.unmountComponentAtNode(div);
});