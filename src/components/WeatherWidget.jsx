import React, { useState } from "react";
import "../styles/WeatherWidget.css";

const WeatherWidget = ({ currentWeather, forecast }) => {
  const { main: currentMain, weather: currentWeatherDetails } = currentWeather;

  const [showTomorrow, setShowTomorrow] = useState(false);

  const toggleView = () => {
    setShowTomorrow((prevShowTomorrow) => !prevShowTomorrow);
  };

  return (
    <div className="weather-widget">
      <div className="top-bar">
      <div className="toggle-button">
        <button onClick={toggleView}>
          {showTomorrow ? "Show Today" : "Show Tomorrow"}
        </button>
      </div>
      <h2 className="city-name">
        {currentWeather.name}, {currentWeather.sys.country}
      </h2>
      </div>
      {showTomorrow ? (
        <>
          <h2 className="day-text">Tomorrow's Forecast</h2>
          <div className="forecast">
            {forecast.map((item) => (
              <div className="forecast-item" key={item.dt}>
                <p className="forecast-time">{item.dt_txt.slice(11, 16)}</p>
                <img
                  className="weather-icon"
                  src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                  alt="Weather icon"
                />
                <div className="forecast-weather">
                  <p className="forecast-temp">
                    {Math.round(item.main.temp - 273.15)}°C
                  </p>
                  <p className="forecast-description">
                    {item.weather[0].description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
        <h2 className="day-text">Today's Weather</h2>
        <div className="current-item">
          <img
            className="weather-icon"
            src={`http://openweathermap.org/img/w/${currentWeatherDetails[0].icon}.png`}
            alt="Weather icon"
          />
          <div className="current-weather">
            <p className="current-temp">
              {Math.round(currentMain.temp - 273.15)}°C
            </p>
            <p className="current-description">{currentWeatherDetails[0].description}</p>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default WeatherWidget;
