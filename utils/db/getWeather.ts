import { database } from '.';
import { query, ref, orderByChild, limitToLast, get } from 'firebase/database';
import WeatherObservation from './../../models/WeatherObservation';

const dbRef = ref(database, 'weather');

export async function getCurrentWeather(): Promise<WeatherObservation> {
  const weather = query(dbRef, orderByChild('dateepoch'), limitToLast(1));
  return get(weather)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const observation = Object.values(snapshot.val())[0] as WeatherObservation;
        return observation;
      }
      throw new Error('No weather observations found', { cause: '404' });
    })
    .catch((error: Error) => {
      throw error;
    });
}
