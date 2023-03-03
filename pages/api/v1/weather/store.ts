import firestore from '../../../../utils/db/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';
import { WeatherObservation } from './../../../../models';

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ error: string } | number>) {
  if (req.method !== 'GET') {
    res.status(405).setHeader('Allow', 'GET').json({ error: 'Method Not Allowed' });
  }
  const { PASSWORD } = req.query;
  if (PASSWORD !== process.env.PASSWORD) {
    res.status(401).send({ error: 'Unauthorized' });
  }

  try {
    const query = req.query as any as WeatherObservation;
    query.dateepoch = new Date().getTime() / 1000;

    await firestore
      .collection('weather')
      .doc(query.dateepoch.toString())
      .set({
        ...query,
      });
    res.status(201).send(query.dateepoch);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
}
