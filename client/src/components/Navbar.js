import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
    const [city, setCity] = useState('');
    const handleSearch = () => {
        if (city.trim() !== '') {
            onSearch(city); 
        }
    };

    return (
        <div className='maincontainer'>
            <div className="navContainer">
                <h2>Weather Forecast</h2>
                <div className="serachContainer">
                    <input
                        type='text'
                        id='search'
                        placeholder='Enter city'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <img
                        id='image'
                        onClick={handleSearch}
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShteyrPGw5IV5onjnE8yhxuBMGZSTWhRWgYWW0_wrGT_rxS60x44pHKf3t92f18OVgIcM&usqp=CAU'
                        alt='searchIcon'
                        width='40px'
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
