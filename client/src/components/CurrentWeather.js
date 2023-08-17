import React from 'react';

function CurrentWeather({ weatherData }) {
    if (!weatherData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="row" id="weather">
            <div>
                <img
                    src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                    alt="weather image loading"
                    width="100px"
                />
            </div>
            <div className="details">
                <h4>
                    {weatherData.name}, {weatherData.sys.country}
                </h4>
                <h1>
                    {weatherData.main.temp > 99
                        ? `${Math.floor(weatherData.main.temp - 273.15)} °C`
                        : `${Math.floor(weatherData.main.temp)} °C`},
                </h1>
                <h4>{weatherData.weather[0].description}</h4>
            </div>
        </div>
    );
}

export default CurrentWeather;
