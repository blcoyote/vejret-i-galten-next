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
      if (observation) {
        res.status(200).json(observation);
      } else {
        res.status(404).json({ error: 'No weather observations found' });
      }
    })
    .catch((error) => {
      res.status(500).send(undefined);
    });
}
