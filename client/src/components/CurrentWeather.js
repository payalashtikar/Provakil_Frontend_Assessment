import React from 'react';
import './WeatherDisplay.css'

function CurrentWeather({ weatherData }) {
  if (!weatherData) {
    return <div>Loading...</div>;
  }
  const calculateDewPoint = (temperature, humidity) => {
    return temperature - ((100 - humidity) / 5);
  };
  return (
    <div>
      <div className="row" id="weather">
        <div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            // src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSRFoRiwd2Y319oJLusmo7_wGu__w_rO08XUueDhFPldWdWw7pOp-Y3AfA3buSkS1P0E&usqp=CAU'
            alt="weather image loading"
            width="100px"
          />
        </div>
        <div className="details">
          <h5>
            {weatherData.name}, {weatherData.sys.country}
          </h5>
          <h2>
            {weatherData.main.temp > 99
              ? `${Math.floor(weatherData.main.temp - 273.15)} °C`
              : `${Math.floor(weatherData.main.temp)} °C`},
          </h2>
          <h5>{weatherData.weather[0].description}</h5>
        </div>
      </div>

      <div className='weatherDetails'>
        <div className='weathDetail'>
          <p>Feels Like {Math.floor(weatherData.main.feels_like)} °C</p>
          <p>Barometer {weatherData.main.pressure} hPa</p>
        </div>
        <div className='weathDetail'>
          <p>Wind Speed {weatherData.wind.speed} m/s</p>
          <p>Humidity {weatherData.main.humidity}%</p>
        </div>
        <div className='weathDetail'>
          <p>Visibility {weatherData.visibility / 1000} km</p>
          <p>Dew Point {Math.floor(calculateDewPoint(weatherData.main.temp, weatherData.main.humidity))} °C</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
