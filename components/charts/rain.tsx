import React from 'react';
import { GraphCard } from '../graphcard';
import { LineChart } from './linechart';
import { useIntl } from 'react-intl';
import { ChartProps } from '../../models';
import { createLineChartOptions } from '../../utils/createLineChartOptions';
import { ChartData } from 'chart.js';

export const RainChart = (props: ChartProps) => {
  const { labels, data, isLoading } = props;
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.daily.chart.rain' });
  const precipUnits = intl.formatMessage({ id: 'page.daily.chart.rain.units' });
  const accum = intl.formatMessage({ id: 'page.daily.chart.accum' });

  const rainData = React.useMemo(() => {
    return {
      label: precipUnits,
      data: data?.filter((x) => x).map((x) => Math.round(x.rainin * 25.4)) ?? [],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    };
  }, [data, precipUnits]);

  const dailyRainData = React.useMemo(() => {
    return {
      label: accum,
      data: data?.filter((x) => x).map((x) => Math.round(x.dailyrainin * 25.4)) ?? [],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    };
  }, [data, accum]);

  const chartOptions = createLineChartOptions(title, 'mm');

  const graphData: ChartData<'line'> = { labels, datasets: [rainData, dailyRainData] };

  return (
    <GraphCard isLoading={isLoading}>
      <LineChart options={chartOptions} data={graphData} />
    </GraphCard>
  );
};
