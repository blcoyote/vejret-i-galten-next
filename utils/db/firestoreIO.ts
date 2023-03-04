import { WeatherObservation, WeatherPeriod } from '../../models';
import firestore from './firestore';

export const getWeatherDay = async (period: WeatherPeriod): Promise<WeatherObservation[]> => {
  const docRef = firestore.collection('weather').where('dateepoch', '>', new Date().getTime() / 1000 - period);

  return docRef
    .get()
    .then((doc) => {
      if (doc.size) {
        return doc.docs.map((doc) => doc.data() as WeatherObservation);
      } else {
        // doc.data() will be undefined in this case
        throw new Error('No weather observations found', { cause: 404 });
      }
    })
    .catch((error: Error) => {
      error.cause = 500;
      throw error;
    });
};

export const getWeatherLatest = async (): Promise<WeatherObservation> => {
  const docRef = firestore.collection('weather').orderBy('dateepoch', 'desc').limit(1);

  return docRef
    .get()
    .then((doc) => {
      if (doc.size) {
        return doc.docs[0].data() as WeatherObservation;
      } else {
        // doc.data() will be undefined in this case
        throw new Error('No weather observations found', { cause: 404 });
      }
    })
    .catch((error: Error) => {
      error.cause = 500;
      throw error;
    });
};
