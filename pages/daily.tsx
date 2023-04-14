import React from 'react';
import { format } from 'date-fns';
import { TemperatureChart } from '../components/charts/temperature';
import { Grid } from '@mui/material';
import { RainChart } from '../components/charts/rain';
import { getWeather } from '../utils';
import { WeatherPeriod } from '../types';
import { WeatherRecord } from '../models';
import { GetServerSideProps } from 'next';

export const Daily = (props: { data: WeatherRecord[] }) => {
  const data = props.data;

  const gridsizeMobile = 12;
  const gridsizeDesktop = 12;

  const labels = React.useMemo(() => {
    return data?.filter((x) => x.dateepoch).map((x) => format(new Date(x.dateepoch * 1000), 'HH:mm'));
  }, [data]);

  return (
    <Grid container>
      <Grid item xs={gridsizeMobile} md={gridsizeDesktop}>
        <TemperatureChart labels={labels} data={data} />
      </Grid>
      <Grid item xs={gridsizeMobile} md={gridsizeDesktop}>
        <RainChart labels={labels} data={data} />
      </Grid>
    </Grid>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=599');
  // Fetch data from external API
  const data = await getWeather(WeatherPeriod.day);

  // Pass data to the page via props
  return { props: { data } };
};

export default Daily;
