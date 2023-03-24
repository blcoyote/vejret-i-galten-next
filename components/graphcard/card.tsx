import { CardContent, LinearProgress, Card as MUICard, styled } from '@mui/material';
import { GraphCardHeader } from './header';

export const Card = styled(MUICard)({
  margin: '1rem',
});

interface GraphCardProps {
  title?: string;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const GraphCard = (props: GraphCardProps) => {
  const { title, isLoading, children } = props;
  return (
    <Card>
      {title && <GraphCardHeader line1={title} />}
      {isLoading && <LinearProgress data-testid={'card-progress-bar'} />}
      <CardContent>{children}</CardContent>
    </Card>
  );
};
