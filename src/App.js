import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([])
  const [city, setCity] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=65d7d5927f7d6f1076c127c58115e9ee&units=metric`
  
  const searchFunction = (e) => {
    if (e.key === 'Enter'){    
      axios.get(url).then((res) => {
      setData(res.data)
      console.log(res.data)
    })
      setCity('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={city}
          onChange={event => setCity(event.target.value)}
          onKeyDown={searchFunction}
          placeholder='Enter Location'
          type="text" />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <h1 className="bold">{data.name}</h1>
          </div>
          <div className="temp">
            {data.main ? <h1 className="bold">{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        
        {data.name !== undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.temp.toFixed()}°C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
        }
      
      </div>
    </div>
  );
}

export default App;