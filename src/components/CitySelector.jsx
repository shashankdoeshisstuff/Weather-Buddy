import React, { useState } from 'react';

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

    // implementing to show our data when the user presses the Enter key
    const onKeyDown = (event) => {
        if (event.keyCode === 13) {
            onSearch();
        }
    }

  return (
    <div className='city-selector'>
        <input type="text" placeholder='Search your City...'
            /* update city value with users input */
            onChange={(event) => setCity(event.target.value)}
            /* value will be the currrent select city */
            value={city}
        />
        {/* event handler for button click */}
        <button 
            onClick={() => onSearch(city)}
        >Search</button>
    </div>
  )
}

export default CitySelector;