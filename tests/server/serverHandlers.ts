import { rest } from 'msw';
import { currentWeatherMock } from './mockData';

const handlers = [
  rest.get('/api/v1/application-configuration', (req, res, ctx) => {
    const mockApiResponse = {
      instrumentationKey: 'TEST',
    };
    return res(ctx.json(mockApiResponse));
  }),

  rest.get('http://localhost/api/v1/weather/current', (req, res, ctx) => {
    return res(ctx.json(currentWeatherMock));
  }),
];

export { handlers };
