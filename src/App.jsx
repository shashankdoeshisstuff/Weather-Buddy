import React from 'react';
import './App.scss';
import CitySelector from './components/CitySelector.jsx';
import UseFetch from './hooks/UseFetch.jsx';
// import { API_KEY, API_BASE_URL } from './apis/config.js';
import WeatherList from './components/WeatherList.jsx';

const App = () => {
  // import env 
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  console.log(API_KEY, API_BASE_URL)
  // destructure the returned values
  const {data, error, isLoading, setUrl} = UseFetch();

  // error handling and loading
  const getContent = () => {
    if(error) return <h2>Error when fetching: {error.message}</h2>;
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
