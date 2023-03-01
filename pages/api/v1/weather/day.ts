// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import WeatherObservation from './../../../../models/WeatherObservation';

export default function handler(req: NextApiRequest, res: NextApiResponse<{ name: string }>) {
  const { id } = req.query;
  res.status(200).json({ name: 'John Doe' });
}
