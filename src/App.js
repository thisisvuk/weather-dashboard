// App.js
import React, { useState, useEffect } from "react";
import WeatherWidget from "./components/WeatherWidget";
import "./App.css";

const API_KEY = "c11de0400e58297214115aa89b7def9f";
const CITY = "Pune";
const CURRENT_WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;
const FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}`;

const App = () => {
  
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastTomorrow, setForecastTomorrow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [currentWeatherResponse, forecastResponse] = await Promise.all([
          fetch(CURRENT_WEATHER_API_URL),
          fetch(FORECAST_API_URL),
        ]);

        const [currentWeatherData, forecastData] = await Promise.all([
          currentWeatherResponse.json(),
          forecastResponse.json(),
        ]);

        setCurrentWeather(currentWeatherData);
        setForecastTomorrow(filterTomorrow(forecastData.list));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const filterTomorrow = (list) => {
      const today = new Date(); 
      return list.filter((item) => {
        const itemDate = new Date(item.dt * 1000);

        return (
          itemDate.getDate() === today.getDate() + 1 &&
          itemDate.getMonth() === today.getMonth() &&
          itemDate.getFullYear() === today.getFullYear()
        );
      });
    };

    fetchData();
  }, []);


  return (
    <div className="app">
      {currentWeather && forecastTomorrow ? (
        <WeatherWidget currentWeather={currentWeather} forecast={forecastTomorrow} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
