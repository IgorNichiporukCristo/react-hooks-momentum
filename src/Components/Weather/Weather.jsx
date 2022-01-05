import React,{ useState, useEffect } from 'react';
import "./weather.scss";
import { KEY_WEATHER } from '../../constans';

const Wearther = () => {
  const [city, setCity] = useState("Brest")
  const [temperature, setTemperature] = useState(0)
  const [description, setDescription] = useState("weather")
  const [speed, setSpeed] = useState(0)
  const [humidity, setHumidity] = useState(0)
  


  useEffect(() => {
    let cleanupFunction = false;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${KEY_WEATHER}&units=metric`;
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod == "404" && !cleanupFunction){
          alert("неверно введены данные");
        } else  if(!cleanupFunction){
          setTemperature(Math.round(data.main.temp))
          setDescription(data.weather[0].description)
          setSpeed( Math.round(data.wind.speed))
          setHumidity( Math.round(data.main.humidity))
        }
      }) 

  },[city]);
  
      

  

  return (
    <div className="weather">
      <input type="text" className="city" value={city}  onChange={e => setCity(e.target.value)}/>
      <div className="description-container">
        <div className='temperature-description'>
          <span className="temperature">{temperature}°C</span>
          <span className="weather-description">{description}</span>
        </div>
        <span className="wind-speed">{speed}m/s</span>
        <span className="humidity">{humidity}%</span>
      </div>
    </div>
  )
}
export default Wearther;
