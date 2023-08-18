import React, { useState } from 'react';
import './hourly.css';

function HourlyForecast({ hourData }) {
    const perPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const currentHourData = hourData.slice(start, end);
    return (

        <div className='hourlyContainer'>
            <h1>Hourly</h1>

            <div className='container'>
                <div className='tableContainer'>

                    <table>
                        <thead>
                            <tr>
                                <th className='dt'>Date / Time</th>
                                <th className='temp'>Temperature °C</th>
                                <th className='desc'>Description</th>
                                <th className='feelslike'>Feels Like °C</th>
                                <th className='humidity'>Humidity %</th>
                                <th className='wind'>Wind Speed m/s</th>
                                <th className='visibility'>Visibility k/m</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {hourData && hourData.map((forecast, index) => { */}
                            {currentHourData && currentHourData.map((forecast, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='dt'>{forecast.dt_txt}</td>
                                        <td className='temp'>{forecast.main.temp > 99
                                            ? `${Math.floor(forecast.main.temp - 273.15)} °C`
                                            : `${Math.floor(forecast.main.temp)} °C`}</td>
                                        <td className='desc'>{forecast.weather[0].description}</td>
                                        <td className='feelslike'>{Math.floor(forecast.main.feels_like)} °C</td>
                                        <td className='humidity'>{forecast.main.humidity}%</td>
                                        <td className='wind'>{forecast.wind.speed} m/s</td>
                                        <td className='visibility'>{forecast.visibility / 1000} km</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='pagination'>
                <img
                    // onClick={() => setCurrentPage(currentPage - 1)}
                    onClick={() => {
                        if (currentPage > 1) {
                            // disabled={currentPage}
                            setCurrentPage(currentPage - 1)
                        }
                        else {
                            setCurrentPage(currentPage = 0)
                        }
                    }}
                    disabled={currentPage === 1}
                    src='https://cdn-icons-png.flaticon.com/128/5544/5544140.png' alt='' />
                <span>{currentPage}</span>
                <img
                    // onClick={() => setCurrentPage(currentPage + 1)}
                    onClick={() => {
                        if (end < hourData.length) {
                            setCurrentPage(currentPage + 1)

                        }
                    }}
                    disabled={end >= hourData.length || currentHourData === 0}
                    src='https://cdn3.iconfinder.com/data/icons/circle-filled-app-ui-set/100/TWalsh__Chevron_circle-512.png' alt='' />
            </div>
        </div>
    );
}

export default HourlyForecast;
