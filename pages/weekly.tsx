import React from 'react';
import { useGetWeeklyWeatherQuery } from '../services/weatherApi';
import { Grid } from '@mui/material';
import { GraphCard } from '../components/graphcard';

export const Weekly = () => {
  const { data, isLoading, isFetching, error, isError, refetch } = useGetWeeklyWeatherQuery({});
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <GraphCard title={'test1'} isLoading={isLoading}>
          test
        </GraphCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <GraphCard title={'test2'} isLoading={isLoading}>
          test
        </GraphCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <GraphCard title={'test3'} isLoading={isLoading}>
          test
        </GraphCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <GraphCard title={'test4'} isLoading={isLoading}>
          test
        </GraphCard>
      </Grid>
    </Grid>
  );
};

export default Weekly;
