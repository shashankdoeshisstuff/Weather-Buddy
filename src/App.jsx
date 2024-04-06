import React from 'react';
import './App.scss';
import CitySelector from './components/CitySelector.jsx';
import UseFetch from './hooks/UseFetch.jsx';
import { API_KEY, API_BASE_URL } from '/etc/secrets/config.js';
// import { API_KEY, API_BASE_URL } from './apis/config.js';
import WeatherList from './components/WeatherList.jsx';

const App = () => {
  // destructure the returned values
  const {data, error, isLoading, setUrl} = UseFetch();

  // error handling and loading
  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>;
    if(!data && isLoading) return <h2>LOADING...</h2>;
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  }

  return (
    <div className="app">
      <h1>Weather Buddy</h1>
      <CitySelector
        onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)}
      />

      {/* conditionally render */}
      {
        !data && !error && !isLoading? <h2>Seach for city.</h2> : null
      }
      {getContent()}
    </div>
  );
}

export default App;
