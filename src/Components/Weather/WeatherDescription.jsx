import React from "react";

const WeatheDescription = ({ data, loading, error }) => {
  if (error) {
    return `invalid city`
  }

  if (loading) {
    return "loading"
  }

  return (
    <div className="description-container">
      <div>
        <div className='temperature-description'>
          <span className="temperature">{ data && Math.round(data.main.temp) } °C</span>
          <span className="weather-description">{ data && data.weather[0].description }</span>
        </div>
        <p className="wind-speed">{ data && Math.round(data.wind.speed) } m/s</p> 
        <p className="humidity">{ data && Math.round(data.main.humidity) } %</p>
      </div>
    </div>   
  )
}

export default WeatheDescription;