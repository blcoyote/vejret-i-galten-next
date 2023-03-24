import { ChartOptions } from 'chart.js';

const defaultChartOptions: ChartOptions = {
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
    decimation: {
      enabled: true,
    },
  },
};

export const createChartOptions = (title: string, yUnit: string): ChartOptions => {
  const tempOptions: ChartOptions = {
    ...defaultChartOptions,
    plugins: { title: { display: true, text: title } },
    scales: {
      y: {
        ticks: {
          callback: function (value, index, ticks) {
            return value.toString() + yUnit;
          },
        },
      },
    },
  };

  return tempOptions;
};
