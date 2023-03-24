export interface WeatherRecord {
  tempf: number;
  dewptf: number;
  windchillf: number;
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
  dateutc: string;
  dateepoch: number;
}
