import Link from 'next/link';
import Button from './button';
import { LinkProps } from '../../../models';

export function LinkButton(props: LinkProps) {
  const { action, href, children } = { ...props };

  return (
    <Link href={href} passHref legacyBehavior>
      <Button onClick={action} data-testid={'appbar-button'}>
        {children}
      </Button>
    </Link>
  );
}
