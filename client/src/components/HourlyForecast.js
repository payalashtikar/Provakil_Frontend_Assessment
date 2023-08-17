import React from 'react';

function HourlyForecast({ hourData }) {
    return (
        <div className="hourdata">
            <h2>Hourly Forecast for the Next 48 Hours</h2>
            <ul>
                {hourData &&
                    hourData.map((forecast, index) => (
                        <li key={index}>
                            Time: {forecast.dt_txt},
                            Temperature: {forecast.main.temp > 99
                                ? `${Math.floor(forecast.main.temp - 273.15)} °C`
                                : `${Math.floor(forecast.main.temp)} °C`},
                            Weather: {forecast.weather[0].description}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default HourlyForecast;
