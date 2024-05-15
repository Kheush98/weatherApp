import './App.css';
import WeatherInfo from './components/WeatherInfo';
import Coordinates from './components/Coordinates';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [weather, setWeather] = useState(null)
  const [lal, setLal] = useState(14.6937)
  const [long, setLong] = useState(-17.4441)

  const [debouncedGetWeather, setDebouncedGetWeather] = useState(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      getWeather();
    }, 500); 

    setDebouncedGetWeather(() => handler);
    return () => clearTimeout(handler);
  }, [lal, long]);

  const handleLal = (e) => {
    setLal(e.target.value)
    // getWeather()
  }
  const handleLong = (e) => {
    setLong(e.target.value)
    // getWeather()
  }

  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lal}&lon=${long}&appid={API_KEY}`)
      setWeather(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className='flex justify-around pt-5 font-mono'>
      <WeatherInfo weather={weather}/>
      <Coordinates longititude={long} laltitude={lal} inputLong={handleLong}  inputLal = {handleLal}/>
    </div>
  );
}

export default App;
