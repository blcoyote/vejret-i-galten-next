import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import Home from '../../pages/home';
import { act } from 'react-dom/test-utils';
import { server } from '../server';
import { Wrapper } from '../wrapper';
import { waitFor } from '@testing-library/dom';

let container;

// Establish API mocking before all tests.
beforeAll(() => server.listen());
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  document.body.removeChild(container);
  container = null;
});
// Clean up after the tests are finished.
afterAll(() => server.close());

describe('Home', () => {
  it('renders a heading', async () => {
    act(() => {
      waitFor(() => {
        ReactDOM.createRoot(container).render(
          <Wrapper locale='da'>
            <Home />
          </Wrapper>
        );
      });
    });

    expect(await screen.findByText('Get started by editing')).toBeInTheDocument();
  });
});
