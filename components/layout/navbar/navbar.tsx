import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { TitleIcon } from './titleicon';
import Button from './button';
import { FormattedMessage, useIntl } from 'react-intl';

interface NavbarProps {
  darkMode: boolean;
  action: () => void;
}

export const Navbar = (props: NavbarProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
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
    setAnchorElNav(null);
  };

  return (
    <AppBar position='fixed'>
      <Container maxWidth='xl' sx={{ paddingLeft: '0px' }}>
        <Toolbar disableGutters>
          <TitleIcon sx={{ display: { xs: 'none', md: 'flex' } }} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
          <TitleIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h6'
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
              <Button key={page} onClick={handleCloseNavMenu} sx={{ mb: -0.9 }} data-testid={'appbar-button'}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
