import './App.css';
import WeatherInfo from './components/WeatherInfo';
import Coordinates from './components/Coordinates';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  return (
    <div className='flex justify-around pt-5 font-mono'>
      <WeatherInfo weather={weather}/>
      <Coordinates longititude={long} laltitude={lal} inputLong={handleLong}  inputLal = {handleLal}/>
    </div>
  );
}

export default App;
