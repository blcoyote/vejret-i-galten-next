import { database } from '.';
import { query, ref, orderByChild, limitToLast, get } from 'firebase/database';
import WeatherObservation from './../../models/WeatherObservation';

const dbRef = ref(database, 'weather');

export async function getCurrentWeather(): Promise<WeatherObservation | undefined> {
  const weather = query(dbRef, orderByChild('dateepoch'), limitToLast(1));

  return get(weather)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const observation = Object.values(snapshot.val())[0] as WeatherObservation;
        return observation;
      }
      return undefined;
    })
    .catch((error: Error) => {
      throw error;
    });
}
