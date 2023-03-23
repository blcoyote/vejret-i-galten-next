import React from 'react';
import { useGetDailyWeatherQuery } from '../services/weatherApi';
import { format } from 'date-fns';
import { DailyTemperature } from '../components/charts/daily/temperature';
import { Grid } from '@mui/material';

export const Daily = () => {
  const { data, isLoading, isFetching, error, isError, refetch } = useGetDailyWeatherQuery({});

  const labels = React.useMemo(() => {
    return data?.filter((x) => x.dateepoch).map((x) => format(new Date(x.dateepoch * 1000), 'HH:mm'));
  }, [data]);

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <DailyTemperature labels={labels} data={data} isLoading={isLoading} />
      </Grid>
      <Grid item xs={12} md={6}>
        <DailyTemperature labels={labels} data={data} isLoading={isLoading} />
      </Grid>
      <Grid item xs={12} md={6}>
        <DailyTemperature labels={labels} data={data} isLoading={isLoading} />
      </Grid>
      <Grid item xs={12} md={6}>
        <DailyTemperature labels={labels} data={data} isLoading={isLoading} />
      </Grid>
    </Grid>
  );
};

export default Daily;
