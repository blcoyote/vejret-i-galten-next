import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const appConfigApi = createApi({
  reducerPath: 'appConfigApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    fetchFn: fetch,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (build) => ({
    getAppConfig: build.query<{ data: string }, {}>({
      query: (arg) => {
        return {
          url: `application-configuration`,
        };
      },
    }),
  }),
});

export const { useGetAppConfigQuery } = appConfigApi;
