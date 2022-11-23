import axios from "axios";
import { useState } from "react";
import { FormTop } from "./components/FormTop";
import { Widget } from "./components/Widget";
import { Location } from "./components/Location";
import { Temp } from "./components/Temp";
import { Description } from "./components/Description";
import { Feels } from "./components/Feels";
import { Humidity } from "./components/Humidity";
import { Wind } from "./components/Wind";

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
        <FormTop location={location} setLocation={setLocation} searchLocation={searchLocation} />

        {/* Container central */}
        <div className="container">

          {/* Localidade e bandeira */}
          <div className="top">
            <Location data={data} />

            {/* Info sobre temperatura */}
            <Temp data={data} />

            {/* Descrição sobre o clima */}
            <Description data={data} />

          </div>

          {/* Painel inferior */}
          <div className="bottom justify-evenly">

            {/* Info de sensação térmica */}
            <Feels data={data}/>

            {/* Info sobre umidade do ar */}
            <Humidity data={data}/>

            {/* Info sobre velocidade do vento */}
            <Wind data={data}/>
          </div> 

        </div>
      </div>

      {/* Widget de Feedback */}
      <Widget />
    </div>
  );
}
