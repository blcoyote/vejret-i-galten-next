import React from 'react';
import { useGetWeeklyWeatherQuery } from '../services/weatherApi';

export const Weekly = () => {
  const { data, isLoading, isFetching, error, isError, refetch } = useGetWeeklyWeatherQuery({});
  return <></>;
};

export default Weekly;
