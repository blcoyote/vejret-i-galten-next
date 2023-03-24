import React from 'react';
import { WeatherRecord } from '../../models';
import { GraphCard } from '../graphcard';
import { LineChart, options } from './linechart';
import { useIntl } from 'react-intl';
import ChartProps from '../../models/chartProps.model';

export const TemperatureChart = (props: ChartProps) => {
  const { labels, data, isLoading } = props;
  const intl = useIntl();
  const temperatureTitle = intl.formatMessage({ id: 'page.daily.chart.temperature' });

  const tempData = React.useMemo(() => {
    return {
      label: temperatureTitle,
      data: data?.filter((x) => x).map((x) => Math.round((((x.tempf - 32) * 5) / 9) * 10) / 10),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    };
  }, [data, temperatureTitle]);

  const tempWindData = React.useMemo(() => {
    return {
      label: 'Windchill',
      data: data?.filter((x) => x).map((x) => Math.round((((x.windchillf - 32) * 5) / 9) * 10) / 10),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    };
  }, [data]);

  const temperatureOptions = React.useMemo(() => {
    return { ...options, plugins: { title: { display: true, text: temperatureTitle } } };
  }, [temperatureTitle]);

  const graphData = { labels, datasets: [tempData, tempWindData] };

  return (
    <GraphCard isLoading={isLoading}>
      <LineChart options={temperatureOptions} data={graphData} />
    </GraphCard>
  );
};
