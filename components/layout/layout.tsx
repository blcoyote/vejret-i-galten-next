import * as React from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../../theme';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = { ...props };

  const [darkMode, setDarkMode] = React.useState<boolean | undefined>();
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(mq.matches);
    mq.addEventListener('change', function (evt) {
      setDarkMode(evt.matches);
    });
  }, []);
  const action = React.useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode]);

  if (darkMode === undefined) return <></>;

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Navbar darkMode action={action} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
