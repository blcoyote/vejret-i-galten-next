// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getDatabase, query, ref, orderByChild, limitToFirst, limitToLast, onValue, child } from 'firebase/database';
import type { NextApiRequest, NextApiResponse } from 'next';
import WeatherObservation from '../../../../models/WeatherObservation';

export default function handler(req: NextApiRequest, res: NextApiResponse<WeatherObservation | { error: string }>) {
  const { id } = req.query;
  const weather = query(ref(getDatabase(), `weather`), orderByChild('dateepoch'), limitToLast(1));
  onValue(weather, (snapshot) => {
    if (snapshot.exists()) {
      const observation = Object.values(snapshot.val())[0] as WeatherObservation;
      return res.status(200).json(observation);
    }
    return res.status(404).json({ error: 'No weather observations found' });
  });
}
