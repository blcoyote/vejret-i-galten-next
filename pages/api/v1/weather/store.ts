import firestore from '../../../../utils/db/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';
import { WeatherObservation, filterWeatherObservation } from './../../../../models';

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ error: string } | number>) {
  if (req.method !== 'POST') {
    res.status(405).setHeader('Allow', 'POST').json({ error: 'Method Not Allowed' });
    return res.end();
  }

  var body = JSON.parse(req.body);
  if (body.PASSWORD !== process.env.PASSWORD) {
    console.log('rip');
    res.status(401).send({ error: 'Unauthorized' });
    return res.end();
  }

  const weather: WeatherObservation = filterWeatherObservation(body);

  try {
    weather.dateepoch = new Date().getTime() / 1000;

    await firestore
      .collection('weather')
      .doc(weather.dateepoch.toString())
      .set({
        ...weather,
      });
    res.status(201).send(weather.dateepoch);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
}
