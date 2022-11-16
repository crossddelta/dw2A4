import axios from "axios";
import React,{ useState } from "react";
import { Widget } from "./components/Widget";

export function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('')
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7ef0cbcc46b664cc0adfc346bb9b05e7`

  const searchLocation = (event: { key: string; }) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div>
      <div className="app">
        <div className="search">
          <input
            type="text"
            value={location}
            onChange={event => setLocation(event.target.value)} 
            onKeyPress={searchLocation}
            placeholder="Informe a cidade"
          />
        </div>

        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              { data.main && <h1 className="bold">{data.main.temp.toFixed()}&deg;C</h1> }
            </div>
            <div className="description">
            { data.weather && <p className="bold">{data.weather[0].main}</p> }
            </div>
          </div>

        {data.name != undefined && 
          <div className="bottom">
            <div className="feels">
              { data.main && <p className="bold">{data.main.feels_like.toFixed()}&deg;C</p> }
              <p>Sensação Térmica</p>
            </div>
            <div className="humidity">
            { data.main && <p className="bold">{data.main.humidity}%</p> }
              <p>Umidade</p>
            </div>
            <div className="wind">
            { data.wind && <p className="bold">{data.wind.speed.toFixed()} Km/h</p> }
              <p>Vento</p>
            </div>
          </div>
          }
        </div>
      </div>


      <Widget />
    </div>
  );
}
