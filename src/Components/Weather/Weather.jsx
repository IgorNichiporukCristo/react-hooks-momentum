import React,{ useState, useEffect } from 'react';
import "./weather.scss";
import { KEY_WEATHER } from '../../constans';

const Wearther = () => {
  const [weather, setWeather] = useState({
    city: "Brest",
    temperature: 0,
    // description: "fef",
    speed: 0,
    humidity: 0
  });


  useEffect(() => {
    let cleanupFunction = false;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${weather.city}&lang=en&appid=${KEY_WEATHER}&units=metric`;
     const fetchData = () => {
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.main.humidity)
        if (data.cod == "404" && !cleanupFunction){
          alert("неверно введены данные");
        } else  if(!cleanupFunction){
          setWeather({...weather, humidity: Math.round(data.main.humidity)})
          setWeather({...weather, temperature: data.main.temp})
          // setWeather({...weather, description: data.weather[0].description})
          setWeather({...weather, speed: data.wind.speed})
          
        }
      }) 
     } 
    
     fetchData();

    return () => cleanupFunction = true;
  },[weather.city]);
  
      

  

  return (
    <div className="weather">
      <input type="text" className="city" value={weather.city}  onChange={e => setWeather({...weather, city:e.target.value})}/>
      <div className="description-container">
        <span className="temperature">{weather.temperature}</span>
        {/* <span className="weather-description">{weather.description}</span> */}
        <span className="wind-speed">{weather.speed}</span>
        <span className="humidity">{weather.humidity}</span>
      </div>
    </div>
  )
}
export default Wearther;
