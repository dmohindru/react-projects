import { useEffect, useState } from 'react';
import axios from 'axios';

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
// const weatherItems: WeatherItem[] = [
//   { label: 'City', value: city },
//   { label: 'Current Temp', value: '12.50' },
//   { label: 'Max Temp', value: '15.67' },
//   { label: 'Min Temp', value: '3.50' },
//   { label: 'Sun Rise', value: '7:00 AM' },
//   { label: 'Sun Set', value: '5:00 PM' },
//   { label: 'Day Duration', value: '10 Hr 12 Min 34 Secs' },
// ];

const useWeather = (
  lat: number,
  lng: number,
  frequency: number
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
          value: data.current.temperature_2m.toFixed(2),
        });

        // max temp
        weatherData.push({
          label: 'Max Temp',
          value: data.daily.temperature_2m_max[0].toFixed(2),
        });

        // min temp
        weatherData.push({
          label: 'Min Temp',
          value: data.daily.temperature_2m_min[0].toFixed(2),
        });
        setWeatherItems(weatherData);
      } catch (error) {}
    };

    fetchWeather();

    const intervalId = setInterval(fetchWeather, frequency * 1000);

    return () => clearInterval(intervalId);
  }, [lat, lng, frequency]);

  return weatherItems;
};

export default useWeather;
