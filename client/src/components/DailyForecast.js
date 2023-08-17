import React from 'react';

function DailyForecast({ dailyData }) {
    return (
        <div className="dailydata">
            <h2>Daily Forecast for the Next 7 Days</h2>
            <ul>
                {dailyData &&
                    dailyData.map((forecast, index) => (
                        <li key={index}>
                            Date: {new Date(forecast.dt * 1000).toLocaleDateString()},
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

export default DailyForecast;
