import React from 'react';
import { useGetCurrentWeatherQuery } from '../services/weatherApi';

export const Home = () => {
  const { data, isLoading, isFetching, error, isError, refetch } = useGetCurrentWeatherQuery({});
  return <></>;
};

export default Home;
