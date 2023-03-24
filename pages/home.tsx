import React from 'react';
import { useGetCurrentWeatherQuery } from '../services/weatherApi';
import { Grid } from '@mui/material';

export const Home = () => {
  const { data, isLoading, isFetching, error, isError, refetch } = useGetCurrentWeatherQuery({});
  return <>This is some test text</>;
};

export default Home;
