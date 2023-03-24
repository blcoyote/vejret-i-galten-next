import { WeatherRecord } from './WeatherRecord';

export default interface ChartProps {
  labels?: string[];
  data?: WeatherRecord[];
  isLoading?: boolean;
}
