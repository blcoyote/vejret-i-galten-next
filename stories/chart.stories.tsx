import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TemperatureChart } from '../components/charts/temperature';
import { format } from 'date-fns';

import weatherData from '../mocks/daily.mock.json';

export default {
  title: 'Graphs/TemperatureChart',
  component: TemperatureChart,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TemperatureChart>;

const Template: ComponentStory<typeof TemperatureChart> = (args) => <TemperatureChart {...args} />;
const labels = weatherData.filter((x) => x.dateepoch).map((x) => format(new Date(x.dateepoch * 1000), 'HH:mm'));

export const Temperature = Template.bind({});

Temperature.args = {
  isLoading: false,
  labels: labels,
  data: weatherData,
};
