import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from '../../components/layout/navbar/navbar';
import { act } from 'react-dom/test-utils';
import { server } from '../server';
import { waitFor } from '@testing-library/dom';
import { Wrapper } from '../wrapper';

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
  container = document.createElement('div');
});

afterAll(() => server.close());

describe('Navbar, standard', () => {
  it('renders the standard navbar', async () => {
    act(() => {
      waitFor(() => {
        ReactDOM.createRoot(container).render(
          <Wrapper locale='da'>
            <Navbar darkMode action={jest.fn()} />
          </Wrapper>
        );
      });
    });
    // test fullsize navbar
    const buttons = await screen.findAllByTestId('appbar-button');
    expect(buttons.length).toBe(3);
    buttons.forEach((button) => {
      expect(button).toBeVisible();
    });
  });

  describe('Navbar, mobile', () => {
    it('renders the mobile navbar', async () => {
      act(() => {
        waitFor(() => {
          ReactDOM.createRoot(container).render(
            <Wrapper locale='da'>
              <Navbar darkMode action={jest.fn()} />
            </Wrapper>
          );
        });
      });

      // resize to mobile size
      render.innerWidth = 400;

      const menuButton = await screen.findByTestId('mobile-appbar-menu-button');

      act(() => {
        menuButton.click();
      });

      const menuButtons = screen.getAllByTestId('mobile-appbar-menu-item');
      menuButtons.forEach((button) => {
        expect(button).toHaveTextContent(/Hjem|Historik|Om/i);
      });

      act(() => {
        menuButton.click();
      });

    });
  });
});
