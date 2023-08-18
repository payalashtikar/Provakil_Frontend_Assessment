import React, { useState, useEffect } from 'react';
import './style.css'
import DailyForecast from './DailyForecast';
import HourlyForecast from './HourlyForecast';
import CurrentWeather from './CurrentWeather';
import Navbar from './Navbar';
const DisplayWeather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');

    const [hourData, setHourData] = useState([]);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const [dailyData, setDailyData] = useState([])

    const [darkMode, setDarkMode] = useState(false);

    const apiKey = `82269396a8289133c3dca1ab7691e5c6`

    async function fetchWeather(cityName) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
        const data = await response.json();
        setWeatherData(data);
    }
    // get hourly forecast data
    async function fetchHourly(latitude, longitude) {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=48&appid=${apiKey}`;
        // const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
        const response = await fetch(url)
        const data = await response.json();
        console.log("fetchHourly data", data)
        return data
    }
    // get daily data for 7 days
    async function fetchDaily(latitude, longitude) {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&cnt=7&appid=${apiKey}`
        const response = await fetch(url);
        const data = await response.json();
        console.log("fetchDaily data", data)
        return data
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async position => {
                const { latitude, longitude } = position.coords;
                console.log("latitude :", latitude)
                console.log("longitude :", longitude)
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
                const data = await response.json();
                console.log("data :", data)
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
                setWeatherData(data);
            });
        }
    }, []);

    useEffect(() => {
        if (latitude && longitude) {
            fetchHourly(latitude, longitude).then(data => setHourData(data.list));
            fetchDaily(latitude, longitude).then(data => setDailyData(data.list));
        }
    }, [latitude, longitude])

    if (!weatherData) {
        return <div>Loading...</div>;
    }
    return (

        <div className={`wethContainer ${darkMode ? 'dark-mode' : " "}`}>
            <Navbar onSearch={fetchWeather} onToggleDarkMode={() => setDarkMode(!darkMode)} />
            <div className='mainContainer'>
                <div className="container">

                    <div className="row" id="weather">
                        <CurrentWeather weatherData={weatherData} />
                    </div>
                </div>
                <DailyForecast dailyData={dailyData} />

                <HourlyForecast hourData={hourData} />
            </div>
        </div>
    )
}
export default DisplayWeather;