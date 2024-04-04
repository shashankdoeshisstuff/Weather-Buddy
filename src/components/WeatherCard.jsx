import React from 'react';

const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
    // create a date object with Date class constructor
    const date = new Date(dt);
    return (
        <div className='weather-card'>
            <div className='card-icon'>
                {/* get the src from URL and pass the icon prop for icon code */}
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
                alt="image not found" />
            </div>
            <div className='card-body'>
                <span>{main}</span>
                {/* datetime is received in milliseconds, so turning them into local date time */}
                <p>
                    {date.toLocaleDateString()} - {date.toLocaleTimeString()}
                </p>
                {/* minimum temperature */}
                <p> Min: {temp_min}</p>
                {/* maximum temperature */}
                <p>Max: {temp_max}</p>
            </div>
        </div>
    )
}

export default WeatherCard;