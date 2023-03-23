import { api } from './api';
import { WeatherRecord } from '../models/WeatherRecord';

// Define a service using a base URL and expected endpoints
const weatherApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCurrentWeather: build.query<WeatherRecord, {}>({
      query: (arg) => {
        return {
          url: `v1/weather/current`,
        };
      },
    }),
    getDailyWeather: build.query<WeatherRecord[], {}>({
      query: (arg) => {
        return {
          url: `v1/weather/day`,
        };
      },
    }),
    getWeeklyWeather: build.query<WeatherRecord[], {}>({
      query: (arg) => {
        return {
          url: `v1/weather/week`,
        };
      },
    }),
  }),
  overrideExisting: false,
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCurrentWeatherQuery, useGetDailyWeatherQuery, useGetWeeklyWeatherQuery,  } = weatherApi;
