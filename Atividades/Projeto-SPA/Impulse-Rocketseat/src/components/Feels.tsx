export function Feels(props: any) {
    return (
        <div className="feels">
              { props.data.main ? <><p className="bold text-3xl mb-1">{props.data.main.feels_like.toFixed()}&deg;C</p><p><abbr title="Sensação térmica"><i className="fa-sharp fa-solid fa-temperature-half fa-xl"></i></abbr></p></> : <p><abbr title="Sensação térmica"><i className="fa-sharp fa-solid fa-temperature-half fa-xl"></i></abbr></p> }
        </div>
    )
}