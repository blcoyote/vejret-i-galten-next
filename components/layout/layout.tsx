import * as React from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { Container, CssBaseline, Paper, Stack, styled, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../../theme';

const ContentContainer = styled(Stack)`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const PageContainer = styled(Container)`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = { ...props };
  const [appInitialised, setAppInitialised] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    const localStorageDarkMode = localStorage.getItem('darkMode');
    if (localStorageDarkMode !== null) {
      setDarkMode(localStorageDarkMode === 'true');
      setAppInitialised(true);
    }
  }, []);

  const action = React.useCallback(() => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
  }, [darkMode]);

  // if (!appInitialised) {
  //   return <></>;
  // }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <ContentContainer direction={'column'}>
        <Navbar darkMode={darkMode} action={action} />

        <PageContainer>{children}</PageContainer>

        <Footer />
      </ContentContainer>
    </ThemeProvider>
  );
};

export default Layout;
