import Link from 'next/link';
import { MenuItem, Typography } from '@mui/material';
import { LinkProps } from '../../../models';

export function LinkMenu(props: LinkProps) {
  const { action, href, children } = { ...props };

  return (
    <MenuItem onClick={action}>
      <Link href={href} passHref legacyBehavior>
        <Typography textAlign='center' data-testid={'mobile-appbar-menu-item'}>
          {children}
        </Typography>
      </Link>
    </MenuItem>
  );
}
