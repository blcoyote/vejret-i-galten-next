// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { WeatherObservation, WeatherPeriod } from './../../../../models';
import { getWeatherDay } from '../../../../utils/db/firestoreIO';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherObservation[] | { error: string }>
) {
  if (req.method !== 'GET') {
    res.status(405).setHeader('Allow', 'GET').send({ error: 'Method Not Allowed' });
  }

  try {
    res.status(200).json(await getWeatherDay(WeatherPeriod.day));
  } catch (error) {
    const e = error as Error;
    res.status(Number(e.cause)).send({ error: e.message });
  }
}
