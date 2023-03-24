import React from 'react';
import { useGetDailyWeatherQuery } from '../services/weatherApi';
import { format } from 'date-fns';
import { TemperatureChart } from '../components/charts/temperature';
import { Grid } from '@mui/material';
import { RainChart } from '../components/charts/rain';

export const Daily = () => {
  const { data, isLoading, isFetching, error, isError, refetch } = useGetDailyWeatherQuery({});

  const gridsizeMobile = 12;
  const gridsizeDesktop = 12;

  const labels = React.useMemo(() => {
    return data?.filter((x) => x.dateepoch).map((x) => format(new Date(x.dateepoch * 1000), 'HH:mm'));
  }, [data]);

  return (
    <Grid container>
      <Grid item xs={gridsizeMobile} md={gridsizeDesktop}>
        <TemperatureChart labels={labels} data={data} isLoading={isLoading} />
      </Grid>
      <Grid item xs={gridsizeMobile} md={gridsizeDesktop}>
        <RainChart labels={labels} data={data} isLoading={isLoading} />
      </Grid>
    </Grid>
  );
};

export default Daily;
