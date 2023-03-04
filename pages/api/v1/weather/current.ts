// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getWeatherLatest } from '../../../../utils/db/firestoreIO';
import { WeatherObservation } from './../../../../models';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherObservation | { error: string } | undefined>
) {
  const { id } = req.query;

  if (req.method !== 'GET') {
    res.status(405).setHeader('Allow', 'GET').send(undefined);
  }

  try {
    res.status(200).json(await getWeatherLatest());
  } catch (error) {
    const e = error as Error;
    res.status(Number(e.cause)).send({ error: e.message });
  }
}
