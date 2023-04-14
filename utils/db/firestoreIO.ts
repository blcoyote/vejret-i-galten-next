import { WeatherRecord } from '../../models';
import { WeatherPeriod } from '../../types';
import firestore from './firestore';

import NodeCache from 'node-cache';
const cache = new NodeCache({ stdTTL: 600, checkperiod: 60 });

export const getWeather = async (period: WeatherPeriod): Promise<WeatherRecord[]> => {
  const key = Object.keys(WeatherPeriod)[Object.values(WeatherPeriod).indexOf(period)];
  const value = cache.get(key);
  if (value !== undefined) {
    return value as WeatherRecord[];
  }
  const docRef = firestore.collection('weather').where('dateepoch', '>', new Date().getTime() / 1000 - period);

  return docRef
    .get()
    .then((doc) => {
      if (doc.size) {
        const observation = doc.docs.map((doc) => doc.data() as WeatherRecord);
        cache.set(key, observation, 600);
        return observation;
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

export const getWeatherLatest = async (): Promise<WeatherRecord> => {
  const value = cache.get('current');
  if (value !== undefined) {
    return value as WeatherRecord;
  }
  const docRef = firestore.collection('weather').orderBy('dateepoch', 'desc').limit(1);
  return docRef
    .get()
    .then((doc) => {
      if (doc.size) {
        const data = doc.docs[0].data() as WeatherRecord;
        cache.set('current', data, 600);
        return data;
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
