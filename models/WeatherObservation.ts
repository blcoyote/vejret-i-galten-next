export interface WeatherObservation {
  id: number;
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
  realtime: number;
  rtfreq: number;
}

export default WeatherObservation;
