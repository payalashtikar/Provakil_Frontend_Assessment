import React, { useState, useEffect } from 'react';
import './style.css'
const DisplayWeather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const apiKey = `82269396a8289133c3dca1ab7691e5c6`

    async function fetchWeather(cityName) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
        const data = await response.json();
        setWeatherData(data);
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
                setWeatherData(data);
            });
        }
    }, []);

    if (!weatherData) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className='container'>
                <div className='row' style={{ textAlign: 'center' }}>
                    <input type='text' id='search' placeholder='Enter City Name' value={city} onChange={(e) => setCity(e.target.value)} />
                    <img id='image' onClick={() => fetchWeather(city)} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShteyrPGw5IV5onjnE8yhxuBMGZSTWhRWgYWW0_wrGT_rxS60x44pHKf3t92f18OVgIcM&usqp=CAU' alt='searchIcon' />
                </div>
                <div className='row' id="weather">
                    <div>
                        <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="weather image loading" width='100px' />
                    </div>
                    <div className='details'>
                        <h4>{weatherData.name}, {weatherData.sys.country}</h4>
                        <h1>{Math.floor(weatherData.main.temp - 273.15)} °C</h1>
                        <h4>{weatherData.weather[0].description}</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default DisplayWeather;