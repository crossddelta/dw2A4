import axios from "axios";
import { useState } from "react";
import { Widget } from "./components/Widget";

export function App() {
  const [data, setData] = useState<any>({});
  const [location, setLocation] = useState('')
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7ef0cbcc46b664cc0adfc346bb9b05e7&lang=pt_br`

  const searchLocation = async (event: { key: string; }) => {
    if(event.key === 'Enter'){
       await axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div>

      {/* Input de pesquisa */}
      <div className="app">
        <div className="search">
          <input 
            className="placeholder-zinc-100"
            type="text"
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Informe a cidade"
          />
        </div>

        {/* Container central */}
        <div className="container">

          {/* Localidade e bandeira */}
          <div className="top">
            <div className="location mb-3">
              { data.main ? <div className="flex align-middle items-center"><p className="font-bold tracking-wider font-['Outfit'] text-5xl"><i className="fa-solid fa-location-dot fa-xs mr-1"></i> {data.name}</p><img className="h-8 ml-3.5 rounded-lg shadow-md" src={`https://countryflagsapi.com/png/${data.sys.country}`} alt="Imagem de uma bandeira" /></div>: <><abbr className="no-underline" title="Informe um local para visualizar suas informações sobre o clima">
                <p className="font-bold tracking-wider font-['Outfit'] text-5xl text-zinc-400 hover:text-zinc-100 transition duration-600"><i className="fa-solid fa-location-dot mr-3"> </i>Informe um local</p>
              </abbr></> }
            </div>

            {/* Info sobre temperatura */}
            <div className="temp">
              { data.main ? <abbr className="no-underline" title="Temperatura em graus Celsius">
                <h1 className="bold">{data.main.temp.toFixed()}&deg;C</h1>
              </abbr> : <abbr className="no-underline" title="Temperatura em graus Celsius">
                <h1 className="bold text-zinc-400 hover:text-zinc-100 transition duration-600">&deg;C</h1>
              </abbr> }
            </div>

            {/* Descrição sobre o clima */}
            <div className="description">
            { data.weather ? <div className="block align-bottom items-center"><img id="weather-icon" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Condições do tempo" /><abbr className="no-underline" title="Informações sobre o clima local">
              <p className="bold text-4xl">{data.weather[0].description}</p>
            </abbr></div> : <div className="block align-bottom items-center"><img id="weather-icon" src={`http://openweathermap.org/img/wn/01n@2x.png`} alt="Condições do tempo" /><abbr className="no-underline" title="Informações sobre o clima local">
              <p className=" bold text-4xl text-zinc-400 hover:text-zinc-100 transition duration-600">Clima local</p>
            </abbr></div>}
            </div>

          </div>

          {/* Painel inferior */}
          <div className="bottom justify-evenly">

            {/* Info de sensação térmica */}
            <div className="feels">
              { data.main ? <><p className="bold text-3xl mb-1">{data.main.feels_like.toFixed()}&deg;C</p><p><abbr title="Sensação térmica"><i className="fa-sharp fa-solid fa-temperature-half fa-xl"></i></abbr></p></> : <p><abbr title="Sensação térmica"><i className="fa-sharp fa-solid fa-temperature-half fa-xl"></i></abbr></p> }
            </div>

            {/* Info sobre umidade do ar */}
            <div className="humidity">
            { data.main ? <><p className="bold text-3xl mb-1">{data.main.humidity}%</p><p><abbr title="Umidade"><i className="fa-solid fa-droplet fa-xl"></i></abbr></p></> : <p><abbr title="Umidade"><i className="fa-solid fa-droplet fa-xl"></i></abbr></p> }
            </div>

            {/* Info sobre velocidade do vento */}
            <div className="wind">
            { data.wind ? <><p className="bold text-3xl mb-1">{data.wind.speed.toFixed()} Km/h</p><p><abbr title="Velocidade do vento"><i className="fa-solid fa-wind fa-xl"></i></abbr></p></> : <p><abbr title="Velocidade do vento"><i className="fa-solid fa-wind fa-xl"></i></abbr></p> }
            </div>

          </div>

        </div>
      </div>

      {/* Widget de Feedback */}
      <Widget />
    </div>
  );
}
