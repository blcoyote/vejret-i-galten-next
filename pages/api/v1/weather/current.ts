// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getDatabase, query, ref, orderByChild, limitToFirst, limitToLast, onValue, off } from 'firebase/database';
import type { NextApiRequest, NextApiResponse } from 'next';
import WeatherObservation from './../../../../models/WeatherObservation';
import { database, auth } from './../../../../utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherObservation | { error: string }>
) {
  const { id } = req.query;
  if (req.method !== 'GET') {
    res.status(405);
    res.end();
  }
  try {
    const weather = query(ref(database, `weather`), orderByChild('dateepoch'), limitToLast(1));

    onValue(weather, (snapshot) => {
      if (snapshot.exists()) {
        const observation = Object.values(snapshot.val())[0] as WeatherObservation;
        res.status(200).json(observation);
      } else {
        res.status(404).json({ error: 'No weather observations found' });
      }
      off(weather);
    });
  } catch {
    res.status(500);
    res.end();
  }
}
