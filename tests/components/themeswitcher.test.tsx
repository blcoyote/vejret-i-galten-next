import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { server } from '../server';
import { waitFor } from '@testing-library/dom';
import { Wrapper } from '../wrapper';
import ThemeSwitch from '../../components/layout/navbar/themeSwitch';

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
    const action = jest.fn();
    let checked = true;

    act(() => {
      waitFor(() => {
        ReactDOM.createRoot(container).render(
          <Wrapper locale='da'>
            <ThemeSwitch
              checked={checked}
              onClick={() => {
                action();
                checked = !checked;
              }}
              data-testid={'navbar-theme-switcher'}
            ></ThemeSwitch>
          </Wrapper>
        );
      });
    });

    const themeSwitcher = screen.getByTestId('navbar-theme-switcher');
    expect(themeSwitcher).toBeVisible();
    expect(themeSwitcher.querySelector('input')).toBeChecked();

    act(() => {
      themeSwitcher.click();
    });
    expect(action).toHaveBeenCalled();
    expect(checked).toBe(false);
    const themeSwitcher2 = screen.getByTestId('navbar-theme-switcher');
    expect(themeSwitcher2.querySelector('input')?.getAttribute('checked')).toBeFalsy();
  });
});
