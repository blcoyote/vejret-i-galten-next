import type { AppProps } from 'next/app';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Analytics } from '@vercel/analytics/react';
import { Layout } from '../components/layout';
import React from 'react';
import en from '../lang/en.json';
import da from '../lang/da.json';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

const messages = {
  da,
  en,
};

function getDirection(locale: string) {
  if (locale === 'ar') {
    return 'rtl';
  }
  return 'ltr';
}

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  let lang = 'da';
  if (locale) {
    lang = locale;
  }

  return (
    <IntlProvider locale={lang} messages={messages[lang as keyof typeof messages]} defaultLocale={'da'}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} dir={getDirection(lang)} />
        </Layout>
        <Analytics />
      </Provider>
    </IntlProvider>
  );
}
