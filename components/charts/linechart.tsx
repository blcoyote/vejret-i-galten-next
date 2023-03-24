import { Box } from '@mui/material';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

interface LineChartProps {
  options?: ChartOptions<'line'>;
  data: ChartData<'line'>;
}

export const LineChart = (props: LineChartProps) => {
  ChartJS.register(LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  return (
    <Box sx={{ position: 'relative', margin: 'auto', width: 'auto', height: { md: '25rem', xs: '15rem' } }}>
      <Line {...props} redraw={true} />
    </Box>
  );
};
