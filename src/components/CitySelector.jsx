import React, { useState } from 'react'
// importing api, api key
import {API_KEY, API_BASE_URL} from '../apis/config';

const CitySelector = () => {
    const [city, setCity] = useState('');
    // to display our data
    const [results, setResult] = useState(null);

    // Fetching promise we need to.
    const onSearch = () => {
        fetch(`${ API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((results) => setResult(results));
    };

    // implementing to show our data when the user presses the Enter key
    const onKeyDown = (event) => {
        if (event.keyCode === 13) {
            onSearch();
        }
    }

  return (
    <div className='city-selector'>
        <h1>Search your City</h1>
        <input type="text" placeholder='Enter city'
            /* update city value with users input */
            onChange={(event) => setCity(event.target.value)}
            /* value will be the currrent select city */
            value={city}
            // add onKeyDown
            onKeyDown={onKeyDown}
        />
        {/* event handler for button click */}
        <button 
            onClick={onSearch}
        >Check Weather</button>
    </div>
  )
}

export default CitySelector;