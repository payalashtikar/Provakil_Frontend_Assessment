import React from 'react';
import './daily.css'

function DailyForecast({ dailyData }) {
  if (!dailyData || dailyData.length === 0) {
    return <div>Loading...</div>;
  }
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (

    <div className='dailyContainer'>
      <h1>Daily</h1>

      <div className='dailyForecastContainer'>
        {dailyData && dailyData.map((forecast, index) => {
          const date = new Date(forecast.dt * 1000);
          const dayOfWeek = daysOfWeek[date.getDay()];

          return (
            <div className='card' key={index}>
              {/* <h5>{daysOfWeek}</h5> */}
              <img
                // src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                src='https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png'
                alt="weather image loading"
                width="50px"
              />
              <h5>{forecast.main.temp > 99
                ? `${Math.floor(forecast.main.temp - 273.15)} °C`
                : `${Math.floor(forecast.main.temp)} °C`}</h5>

              <p>{forecast.weather[0].description}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default DailyForecast;
