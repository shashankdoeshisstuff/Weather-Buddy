import './App.scss';
import WeatherCard from './components/WeatherCard.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Weather</div>
         
      </header>
      {/* dt is in unix-seconds but javascript uses milliseconds, multiply with 1000 */}
      <WeatherCard 
        dt={1602104400 * 1000}
        temp_min="22.67"
        temp_max="24.39"
        main="Clear"
        icon="01d"
      />
    </div>
  );
}

export default App;
