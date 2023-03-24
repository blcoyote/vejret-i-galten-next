import { WeatherRecord } from './WeatherRecord.model';

export interface ChartProps {
  labels?: string[];
  data?: WeatherRecord[];
  isLoading?: boolean;
}
