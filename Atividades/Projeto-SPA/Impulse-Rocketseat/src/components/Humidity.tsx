export function Humidity(props: any) {
    return (
        <div className="humidity">
            { props.data.main ? <><p className="bold text-3xl mb-1">{props.data.main.humidity}%</p><p><abbr title="Umidade"><i className="fa-solid fa-droplet fa-xl"></i></abbr></p></> : <p><abbr title="Umidade"><i className="fa-solid fa-droplet fa-xl"></i></abbr></p> }
        </div>
    )
}