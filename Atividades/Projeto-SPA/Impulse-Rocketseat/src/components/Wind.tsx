export function Wind(props: any) {
    return (
        <div className="wind">
            { props.data.wind ? <><p className="bold text-3xl mb-1">{props.data.wind.speed.toFixed()} Km/h</p><p><abbr title="Velocidade do vento"><i className="fa-solid fa-wind fa-xl"></i></abbr></p></> : <p><abbr title="Velocidade do vento"><i className="fa-solid fa-wind fa-xl"></i></abbr></p> }
        </div>
    )
}