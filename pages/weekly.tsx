import React from 'react';
import { Grid } from '@mui/material';
import { GraphCard } from '../components/graphcard';
import { getWeather } from '../utils';
import { WeatherPeriod } from '../types';
import { WeatherRecord } from '../models';
import { GetServerSideProps } from 'next';

export const Weekly = (props: { data: WeatherRecord[] }) => {
  const data = props.data;

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <GraphCard title={'test1'}>test</GraphCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <GraphCard title={'test2'}>test</GraphCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <GraphCard title={'test3'}>test</GraphCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <GraphCard title={'test4'}>test</GraphCard>
      </Grid>
    </Grid>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=599');
  // Fetch data from external API
  const data = await getWeather(WeatherPeriod.week);

  // Pass data to the page via props
  return { props: { data } };
};

export default Weekly;
