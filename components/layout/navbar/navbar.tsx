import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { TitleIcon } from './titleicon';
import Button from './button';
import { FormattedMessage, useIntl } from 'react-intl';
import ThemeSwitch from './themeSwitch';

interface NavbarProps {
  darkMode: boolean;
  action: () => void;
}

export const Navbar = (props: NavbarProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState<undefined | HTMLElement>(undefined);
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.home.navbar.title' });
  const home = intl.formatMessage({ id: 'page.home.navbar.home' });
  const history = intl.formatMessage({ id: 'page.home.navbar.history' });
  const about = intl.formatMessage({ id: 'page.home.navbar.about' });

  const pages = [home, history, about];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(undefined);
  };

  return (
    <AppBar position='fixed'>
      <Container maxWidth='xl' sx={{ paddingLeft: 0 }}>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <TitleIcon />
            <Typography
              variant='h6'
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, paddingRight: '0.5rem' }}>
            <IconButton
              size='large'
              aria-label='menu-appbar'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
              data-testid='mobile-appbar-menu-button'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center' data-testid={'mobile-appbar-menu-item'}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <TitleIcon sx={{ minWidth: '2rem' }} />
          </Box>
          <Typography
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} data-testid={'appbar-button'}>
                {page}
              </Button>
            ))}
          </Box>
          <ThemeSwitch checked={props.darkMode} onClick={props.action} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
