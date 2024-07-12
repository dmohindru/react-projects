import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

export type WeatherItem = {
  label: string;
  value: string;
};

type ApiResponse = {
  latitude: number;
  longitude: number;
  current: {
    temperature_2m: number;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
    daylight_duration: number[];
  };
};

const getFormattedTemp: (temp: number) => string = (temp) => {
  return `${temp.toFixed(2)} C`;
};

const getHourMinSec: (duration: number) => string = (duration) => {
  const hours = Math.floor(duration / 3600);
  const mins = Math.floor((duration % 3600) / 60);
  const secs = (duration % 60).toFixed();
  return `${hours}h ${mins}m ${secs}s`;
};

const convertToTimeZone = (date: string, timeZone: string): string => {
  return new Date(`${date}Z`)
    .toLocaleString('en-US', { timeZone })
    .split(',')[1];
};
const useWeather = (
  lat: number,
  lng: number,
  frequency: number,
  timezone: string
): WeatherItem[] => {
  const [weatherItems, setWeatherItems] = useState<WeatherItem[]>([]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { data } = await axios.get<ApiResponse>(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration&forecast_days=1&current=temperature_2m`
        );
        console.log(JSON.stringify(data));
        const weatherData: WeatherItem[] = [];
        // current temp
        weatherData.push({
          label: 'Current Temp',
          value: getFormattedTemp(data.current.temperature_2m),
        });

        // max temp
        weatherData.push({
          label: 'Max Temp',
          value: getFormattedTemp(data.daily.temperature_2m_max[0]),
        });

        // min temp
        weatherData.push({
          label: 'Min Temp',
          value: getFormattedTemp(data.daily.temperature_2m_min[0]),
        });

        // sun rise
        weatherData.push({
          label: 'Sun Rise',
          value: convertToTimeZone(data.daily.sunrise[0], timezone),
        });

        // sun set
        weatherData.push({
          label: 'Sun Set',
          value: convertToTimeZone(data.daily.sunset[0], timezone),
        });

        // day duration
        weatherData.push({
          label: 'Day Duration',
          value: getHourMinSec(data.daily.daylight_duration[0]),
        });

        setWeatherItems(weatherData);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          setWeatherItems([{ label: 'Error', value: axiosError.message }]);
        } else {
          setWeatherItems([{ label: 'Error', value: 'Unknown Error' }]);
        }
      }
    };

    fetchWeather();

    const intervalId = setInterval(fetchWeather, frequency * 1000);

    return () => clearInterval(intervalId);
  }, [lat, lng, frequency, timezone]);

  return weatherItems;
};

export default useWeather;
