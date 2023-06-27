import * as React from 'react';
import { getWeatherLatest } from '../utils';
import { WeatherRecord } from '../models';
import { GetServerSideProps } from 'next';

export const TestingGround = (props: { data: WeatherRecord }) => {
  return <>{props.data.tempf ?? '-'}</>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=599');
  // Fetch data from external API
  const data = await getWeatherLatest();

  // Pass data to the page via props
  return { props: { data } };
};

export default TestingGround;
