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
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export const options: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 1,
      borderWidth: 0,
      hoverRadius: 10,
      hoverBorderWidth: 1,
    },
    line: {
      borderWidth: 2,
      tension: 0.4,
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Replace this',
    },
    decimation: {
      enabled: true,
    },
  },
};

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
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  return (
    <Box sx={{ position: 'relative', margin: 'auto', width: 'auto', height: { md: '25rem', xs: '15rem' } }}>
      <Line {...props} data-testid={'linechart'} />
    </Box>
  );
};
