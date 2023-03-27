import { lightTheme } from '../theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import da from '../lang/da.json';
import { IntlProvider } from 'react-intl';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <IntlProvider locale={'da'} messages={da} defaultLocale={'da'}>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      </Provider>
    </IntlProvider>
  ),
];
