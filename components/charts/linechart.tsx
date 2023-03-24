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
  ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

interface LineChartProps {
  options?: ChartOptions<'line'>;
  data: ChartData<'line'>;
}

export const LineChart = (props: LineChartProps) => {
  ChartJS.register(CategoryScale, LinearScale, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  return (
    <Box sx={{ position: 'relative', margin: 'auto', width: 'auto', height: { md: '25rem', xs: '15rem' } }}>
      <Line {...props} />
    </Box>
  );
};
