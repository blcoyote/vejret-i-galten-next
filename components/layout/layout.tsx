import * as React from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { Container, CssBaseline, Stack, styled, ThemeProvider } from '@mui/material';
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
  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const localStorageDarkMode = localStorage.getItem('darkMode');
    if (localStorageDarkMode !== null) {
      setDarkMode(localStorageDarkMode === 'true');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    setMounted(true);
  }, []);

  const action = React.useCallback(() => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
  }, [darkMode]);

  // prevents ssr flash for mismatched dark mode
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <ContentContainer direction={'column'} style={{ visibility: !mounted ? 'hidden' : 'visible' }}>
        <Navbar darkMode={darkMode} action={action} />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </ContentContainer>
    </ThemeProvider>
  );
};

export default Layout;
