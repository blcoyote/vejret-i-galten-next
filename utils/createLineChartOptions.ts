import { ChartOptions } from 'chart.js';

export const createLineChartOptions = (title: string, yUnit: string): ChartOptions<'line'> => {
  const tempOptions: ChartOptions<'line'> = {
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
        borderWidth: 1,
        tension: 0.2,
      },
    },
    plugins: {
      title: {
        display: true,
        text: title,
      },
      legend: {
        position: 'top',
      },
      decimation: {
        enabled: true,
        algorithm: 'min-max',
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value, index, ticks) {
            return `${value.toString()}${yUnit}`;
          },
        },
      },
    },
  };

  return tempOptions;
};
