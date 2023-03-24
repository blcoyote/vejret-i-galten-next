import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { TitleIcon } from './titleicon';
import ThemeSwitch from './themeSwitch';
import { LinkButton } from './linkButton';
import { LinkMenu } from './linkMenu';
import { useIntl } from 'react-intl';

interface NavbarProps {
  darkMode: boolean;
  action: () => void;
}

export const Navbar = (props: NavbarProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState<undefined | HTMLElement>(undefined);
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.home.navbar.title' });
  const home = intl.formatMessage({ id: 'page.home.navbar.home' });
  const daily = intl.formatMessage({ id: 'page.home.navbar.daily' });
  const weekly = intl.formatMessage({ id: 'page.home.navbar.weekly' });
  const about = intl.formatMessage({ id: 'page.home.navbar.about' });

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
                mt: 0.5,
                mr: 2,
                ml: 1,
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
              <LinkMenu href='/' action={handleCloseNavMenu} key={'home'}>
                {home}
              </LinkMenu>
              <LinkMenu href='/daily' action={handleCloseNavMenu} key={'daily'}>
                {daily}
              </LinkMenu>
              <LinkMenu href='/weekly' action={handleCloseNavMenu} key={'weekly'}>
                {weekly}
              </LinkMenu>
              <LinkMenu href='/about' action={handleCloseNavMenu} key={'about'}>
                {about}
              </LinkMenu>
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mt: 0.5 }}>
            <LinkButton href='/' action={handleCloseNavMenu} key={'home'}>
              {home}
            </LinkButton>
            <LinkButton href='/daily' action={handleCloseNavMenu} key={'daily'}>
              {daily}
            </LinkButton>
            <LinkButton href='/weekly' action={handleCloseNavMenu} key={'weekly'}>
              {weekly}
            </LinkButton>
            <LinkButton href='/about' action={handleCloseNavMenu} key={'about'}>
              {about}
            </LinkButton>
          </Box>
          <ThemeSwitch checked={props.darkMode} onClick={props.action} data-testid={'navbar-theme-switcher'} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
