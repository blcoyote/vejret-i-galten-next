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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Temperatur',
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
  return <Line {...props} />;
};
