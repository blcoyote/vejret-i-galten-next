// ts-nocheck
// disable typecheck since "Line" has a type problem with perfectly valid 'ChartOptions' parameters.
import { Box } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  RadialLinearScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

interface LineChartProps {
  options?: ChartOptions;
  data: {
    labels: string[] | undefined;
    datasets: {
      label: string;
      data: number[] | undefined;
      borderColor: string;
      backgroundColor: string;
    }[];
  };
}

export const LineChart = (props: LineChartProps) => {
  ChartJS.register(CategoryScale, LinearScale, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  return (
    <Box sx={{ position: 'relative', margin: 'auto', width: 'auto', height: { md: '25rem', xs: '15rem' } }}>
      <Line {...props} data-testid={'linechart'} />{' '}
    </Box>
  );
};
