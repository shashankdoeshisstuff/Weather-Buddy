import React from 'react';
import { VscCircle } from "react-icons/vsc";

const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
    // create a date object with Date class constructor
    const date = new Date(dt);
    return (
        <div className='weather-card'>
            <div className='card-icon'>
                {/* get the src from URL and pass the icon prop for icon code */}
                <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} 
                alt="image not found" />
            </div>
            <div className='card-body'>
                <div>
                    <p className='emphasis'>{main}</p>
                    {/* datetime is received in milliseconds, so turning them into local date time */}
                    <div>
                        <p>{date.toLocaleDateString()}</p>
                        <p>{date.toLocaleTimeString()}</p>
                    </div>
                </div>
                <div className='temp'>
                    {/* maximum temperature */}
                    <p className='emphasis'>{temp_max}<VscCircle className='degree'/>C</p>
                    {/* minimum temperature */}
                    <p> Min : {temp_min}<VscCircle className='degree'/>C</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;