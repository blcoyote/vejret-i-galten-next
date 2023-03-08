import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import en from '../lang/en.json';
import da from '../lang/da.json';
import { IntlProvider } from 'react-intl';

interface WrapperProps {
  locale: 'en' | 'da';
  children: React.ReactNode;
}

export const Wrapper = (props: WrapperProps) => {
  const { children, locale } = { ...props };

  const messages = {
    da,
    en,
  };

  return (
    <>
      <IntlProvider locale={'da'} messages={messages[locale as keyof typeof messages]} defaultLocale={'da'}>
        <Provider store={store}>{children}</Provider>
      </IntlProvider>
    </>
  );
};

export default Wrapper;
