import { api } from './api';
import type { WeatherObservation } from '../models/WeatherObservation';

// Define a service using a base URL and expected endpoints
const weatherApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCurrentWeather: build.query<
      WeatherObservation,
      { customerNumber?: number; accountNumber?: number; equipId?: number }
    >({
      query: (arg) => {
        const { customerNumber, accountNumber, equipId } = arg;
        return {
          url: `v1/customers/${customerNumber}/accounts/${accountNumber}/addons/security/status`,
          params: { equipId },
        };
      },
    }),
  }),
  overrideExisting: false,
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCurrentWeatherQuery } = weatherApi;
