import React from 'react';
import Home from '../../pages/bak.index';

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />);
  });
});
