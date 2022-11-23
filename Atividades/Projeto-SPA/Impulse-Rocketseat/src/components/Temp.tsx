export function Temp(props: any) {
    return(
        <div className="temp">
            { props.data.main ? <abbr className="no-underline" title="Temperatura em graus Celsius">
            <h1 className="bold">{props.data.main.temp.toFixed()}&deg;C</h1>
            </abbr> : <abbr className="no-underline" title="Temperatura em graus Celsius">
            <h1 className="bold text-zinc-400 hover:text-zinc-100 transition duration-600">&deg;C</h1>
            </abbr> }
        </div>
    )
}