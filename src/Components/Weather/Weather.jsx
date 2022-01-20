import React,{ useState, useEffect, useCallback } from 'react';
import "./weather.scss";
import { KEY_WEATHER } from '../../constans';

const definitionCity = () => {
  if(localStorage.getItem('citySave')) {
    return `${localStorage.getItem('citySave')}`
  } else{
    return "Brest"
  }
}

const Wearther = () => {
  const [state, setState] = useState(() => true)
  const [city, setCity] = useState(() => { return definitionCity()})
  const [temperature, setTemperature] = useState(0)
  const [description, setDescription] = useState("weather")
  const [speed, setSpeed] = useState(0)
  const [humidity, setHumidity] = useState(0)
  


  useEffect(() => {
    if(state) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${KEY_WEATHER}&units=metric`;
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod == "404"){
          alert("enter the correct name")
          setTemperature(0)
          setDescription("")
          setSpeed(0)
          setHumidity(0)
        } else {  
          setTemperature(Math.round(data.main.temp))
          setDescription(data.weather[0].description)
          setSpeed( Math.round(data.wind.speed))
          setHumidity( Math.round(data.main.humidity))
        }
      }) 
    }
      setState(false)  
  },[state === true]);
  
      

  const handleChange = useCallback(
    (event) => {
      localStorage.setItem('citySave', event.target.value)
      setCity(event.target.value)
    }, [] ) 

  const handleKeyPress = useCallback(
    event => {
      if (event.key === 'Enter') {
        setState(true)
      }
    }
  )  
  return (
    <div className="weather">
      <input type="text" className="city" value={city}  
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <div className="description-container">
        <div className='temperature-description'>
          <span className="temperature">{temperature} °C</span>
          <span className="weather-description">{description}</span>
        </div>
        <span className="wind-speed">{speed} m/s</span>
        <span className="humidity">{humidity} %</span>
      </div>
    </div>
  )
}
export default Wearther;
