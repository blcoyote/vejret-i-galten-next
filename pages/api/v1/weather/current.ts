// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getCurrentWeather } from '../../../../utils/db/getWeather';
import WeatherObservation from './../../../../models/WeatherObservation';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherObservation | { error: string } | undefined>
) {
  const { id } = req.query;

  if (req.method !== 'GET') {
    res.status(405).setHeader('Allow', 'GET').send(undefined);
  }

  await getCurrentWeather()
    .then((observation) => {
      res.status(200).json(observation);
    })
    .catch((error: Error) => {
      const cause = Number(error.cause);
      if (!isNaN(cause)) {
        res.status(Number(error.cause)).send({ error: error.message });
      }
      res.status(500).send({ error: error.message });
    });
}
