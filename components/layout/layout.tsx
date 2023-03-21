import * as React from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { Container, CssBaseline, styled, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../../theme';

const ContentContainer = styled('div')`
  margin-left: 76px;
  padding: 0 30px;
`;

const PageContainer = styled(Container)`
  margin-top: 1rem;
`;


interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = { ...props };
  const [darkMode, setDarkMode] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const localStoragedarkMode = localStorage.getItem('darkMode');

    if (localStoragedarkMode !== null) {
      setDarkMode(localStoragedarkMode === 'true');
    } else {
      setDarkMode(mq.matches);
    }

    mq.addEventListener('change', function (evt) {
      setDarkMode(evt.matches);
    });
  }, []);

  const action = React.useCallback(() => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
  }, [darkMode]);

  if (darkMode === undefined) {
    // it defaults to lightmode, which is a problem for darkmode users so we save a render cycle (for now)
    return <></>;
  }
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <ContentContainer>
        <Navbar darkMode={darkMode} action={action} />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </ContentContainer>
    </ThemeProvider>
  );
};

export default Layout;
