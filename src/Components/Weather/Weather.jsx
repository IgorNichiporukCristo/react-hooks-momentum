import React,{ useState, useEffect, useCallback } from 'react';
import "./weather.scss";
import { KEY_WEATHER } from '../../constans';
import useFetch from '../../hooks/useFetch';
import WeatherDescription from './WeatherDescription.jsx';

const definitionCity = () => {
  if(localStorage.getItem('citySave')) {
    return `${ localStorage.getItem('citySave') }`;
  } 
  return "Brest"; 
};

const Wearther = () => {
  const [city, setCity] = useState(() => { return definitionCity()});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${KEY_WEATHER}&units=metric`;
  const { data, loading, error, fetchData } = useFetch(url);  

  const handleChange = useCallback(
    (event) => {
      localStorage.setItem('citySave', event.target.value);
      setCity(event.target.value);
    }, [] ) 
    
  const handleSubmitWeather = e => {
    e.preventDefault();
    fetchData(url)
  }  

  return (
    <div className="weather">
      <form onSubmit={ handleSubmitWeather }>
        <input type="text" className="city" value={city}  
          onChange={handleChange}
        />
      </form>
      <WeatherDescription data={data} loading={loading} error={error} />
    </div>
  );
}
export default Wearther;
