export function Description(props: any) {
    return (
        <div className="description">
            { props.data.weather ? <div className="block align-bottom items-center"><img id="weather-icon" src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="Condições do tempo" /><abbr className="no-underline" title="Informações sobre o clima local">
              <p className="bold text-4xl">{props.data.weather[0].description}</p>
            </abbr></div> : <div className="block align-bottom items-center"><img id="weather-icon" src={`http://openweathermap.org/img/wn/01n@2x.png`} alt="Condições do tempo" /><abbr className="no-underline" title="Informações sobre o clima local">
              <p className=" bold text-4xl text-zinc-400 hover:text-zinc-100 transition duration-600">Clima local</p>
            </abbr></div>}
        </div>
    )
}