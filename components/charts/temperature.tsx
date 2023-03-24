import React from 'react';
import { GraphCard } from '../graphcard';
import { LineChart } from './linechart';
import { useIntl } from 'react-intl';
import { ChartProps } from '../../models';
import { createLineChartOptions } from '../../utils/createLineChartOptions';
import { ChartData } from 'chart.js';

export const TemperatureChart = (props: ChartProps) => {
  const { labels, data, isLoading } = props;
  const intl = useIntl();
  const temperatureTitle = intl.formatMessage({ id: 'page.daily.chart.temperature' });

  const tempData = React.useMemo(() => {
    return {
      label: temperatureTitle,
      data: data?.filter((x) => x).map((x) => Math.round((((x.tempf - 32) * 5) / 9) * 10) / 10) ?? [],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    };
  }, [data, temperatureTitle]);

  const tempWindData = React.useMemo(() => {
    return {
      label: 'Windchill',
      data: data?.filter((x) => x).map((x) => Math.round((((x.windchillf - 32) * 5) / 9) * 10) / 10) ?? [],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    };
  }, [data]);

  const chartOptions = createLineChartOptions(temperatureTitle, '°C');

  const graphData: ChartData<'line'> = { labels, datasets: [tempData, tempWindData] };

  return (
    <GraphCard isLoading={isLoading}>
      <LineChart options={chartOptions} data={graphData} />
    </GraphCard>
  );
};
