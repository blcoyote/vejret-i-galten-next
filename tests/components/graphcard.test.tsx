import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GraphCard } from '../../components/graphcard';
import { act } from 'react-dom/test-utils';
import { server } from '../server';
import { waitFor } from '@testing-library/dom';
import { Wrapper } from '../wrapper';
import { Box, Typography } from '@mui/material';

let container;
let globalWidth = 0;

// Establish API mocking before all tests.
beforeAll(() => server.listen());
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  globalWidth = global.innerWidth;
});
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  document.body.removeChild(container);
  container = document.createElement('div');
  global.innerWidth = globalWidth;
});

afterAll(() => server.close());

describe('Card Loading, standard', () => {
  it('renders the standard navbar', async () => {
    act(() => {
      waitFor(() => {
        ReactDOM.createRoot(container).render(
          <Wrapper locale='da'>
            <GraphCard title='Card Title' isLoading={true}>
              <Box>
                <Typography data-testid={'cardtest'}>This is some text in the card</Typography>
              </Box>
            </GraphCard>
          </Wrapper>
        );
      });
    });

    const content = await screen.findAllByTestId('cardtest');
    expect(content).toHaveLength(1);
    expect(screen.getByTestId('card-progress-bar')).toBeInTheDocument();
    expect(screen.getByTestId('cardHeader')).toHaveTextContent('Card Title');
  });
});

describe('Card done loading with no header, standard', () => {
  it('renders the standard navbar', async () => {
    act(() => {
      waitFor(() => {
        ReactDOM.createRoot(container).render(
          <Wrapper locale='da'>
            <GraphCard isLoading={false}>
              <Box>
                <Typography data-testid={'cardtest'}>This is some text in the card</Typography>
              </Box>
            </GraphCard>
          </Wrapper>
        );
      });
    });

    expect(screen.queryByTestId('card-progress-bar')).toBeNull();
    expect(screen.queryByTestId('cardHeader')).toBeNull();
  });
});
