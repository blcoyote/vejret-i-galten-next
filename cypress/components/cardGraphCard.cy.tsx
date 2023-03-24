import React from 'react';
import { GraphCard } from '../../components/graphcard/card';

describe('<GraphCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GraphCard> test</GraphCard>);
  });
});
