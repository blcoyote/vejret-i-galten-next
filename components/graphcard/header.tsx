import { CardHeader, Divider, styled } from '@mui/material';

const titleTypographyProps = {
  fontSize: '1.1rem',
  fontFamily: 'Monospace',
};
const subheaderTypographyProps = {
  fontSize: '1rem',
  fontFamily: 'Monospace',
};

const Header = styled(CardHeader)`
  padding: 0.5rem 1rem 0.5rem 1rem;
`;

interface CardHeaderProps {
  line1: React.ReactNode;
  line2?: React.ReactNode;
  avatar?: React.ReactNode;
}

export const GraphCardHeader = (props: CardHeaderProps) => {
  return (
    <>
      <Header
        titleTypographyProps={titleTypographyProps}
        title={props.line1}
        subheaderTypographyProps={subheaderTypographyProps}
        subheader={props.line2}
        avatar={props.avatar}
        data-testid='cardHeader'
      />
      <Divider />
    </>
  );
};
