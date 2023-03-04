export interface WeatherObservation {
  ID: string;
  PASSWORD?: string;
  indoortempf: number;
  tempf: number;
  dewptf: number;
  windchillf: number;
  indoorhumidity: number;
  humidity: number;
  windspeedmph: number;
  windgustmph: number;
  winddir: number;
  absbaromin: number;
  baromin: number;
  rainin: number;
  dailyrainin: number;
  weeklyrainin: number;
  monthlyrainin: number;
  solarradiation: number;
  UV: number;
  dateutc: Date;
  dateepoch?: number;
  realtime: number;
  rtfreq: number;
}

export const filterWeatherObservation = (weather: WeatherObservation) => {
  if (weather.PASSWORD) delete weather.PASSWORD;
  return { ...weather } as WeatherObservation;
};