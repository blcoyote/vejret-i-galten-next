import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import { Navbar } from '../components/layout/navbar/navbar'
import { act } from 'react-dom/test-utils';
import {server} from './server';
import { waitFor } from '@testing-library/dom';
import { Wrapper } from './wrapper';


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
  server.resetHandlers()
  document.body.removeChild(container);
  container = null;});
// Clean up after the tests are finished.
afterAll(() => server.close());


describe('Navbar, standard', () => {
  it('renders the standard navbar', async () => {
    
    act(() => {
      waitFor(() => {
        ReactDOM.createRoot(container).render(<Wrapper locale='da'><Navbar /></Wrapper>);
      });
    });
    // test fullsize navbar
    const buttons = await screen.findAllByTestId('appbar-button')
    expect(buttons.length).toBe(3)
    buttons.forEach(button => {
      expect(button).toBeVisible()
    })

    
  })

  describe('Navbar, mobile', () => {
    it('renders the mobile navbar', async () => {
    
      act(() => {
        waitFor(() => {
          ReactDOM.createRoot(container).render(<Wrapper locale='da'><Navbar /></Wrapper>);
        });
      });

      // resize to mobile size
      render.innerWidth = 300;
    

      const menuButton = await screen.findByTestId('mobile-appbar-menu-button')
      act(() => {
        menuButton.click();
      })

      const menuButtons = await screen.findAllByTestId('mobile-appbar-menu-item')
      expect(menuButtons.length).toBe(3)
      menuButtons.forEach(button => {
        expect(button).toBeVisible()
      })
    
  })
  });
});