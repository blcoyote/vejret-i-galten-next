// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { WeatherRecord } from './../../../../models';
import { getWeather } from '../../../../utils/db/firestoreIO';
import { WeatherPeriod } from '../../../../types';

export default async function handler(req: NextApiRequest, res: NextApiResponse<WeatherRecord[] | { error: string }>) {
  if (req.method !== 'GET') {
    res.status(405).setHeader('Allow', 'GET').send({ error: 'Method Not Allowed' });
  }

  try {
    res.status(200).json(await getWeather(WeatherPeriod.week));
  } catch (error) {
    const e = error as Error;
    res.status(Number(e.cause)).send({ error: e.message });
  }
}
