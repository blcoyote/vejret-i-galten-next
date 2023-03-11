import React from 'react';
import { useGetDailyWeatherQuery } from '../services/weatherApi';

export const Daily = () => {
  const { data, isLoading, isFetching, error, isError, refetch } = useGetDailyWeatherQuery({});

  return <></>;
};

export default Daily;
