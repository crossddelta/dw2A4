export function Location(props: any) {
    return(
        <div className="location mb-3">
            { props.data.main ? <div className="flex align-middle items-center"><p className="font-bold tracking-wider font-['Outfit'] text-5xl"><i className="fa-solid fa-location-dot fa-xs mr-1"></i> {props.data.name}</p><img className="h-8 ml-3.5 rounded-lg shadow-md" src={`https://countryflagsapi.com/png/${props.data.sys.country}`} alt="Imagem de uma bandeira" /></div>: <><abbr className="no-underline" title="Informe um local para visualizar suas informações sobre o clima">
            <p className="font-bold tracking-wider font-['Outfit'] text-5xl text-zinc-400 hover:text-zinc-100 transition duration-600"><i className="fa-solid fa-location-dot mr-3"> </i>Informe um local</p>
            </abbr></> }
        </div>
    )
}