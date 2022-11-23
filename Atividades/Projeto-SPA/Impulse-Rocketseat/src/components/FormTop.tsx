export function FormTop(props: any) {
    return (
        <div className="search">
          <input 
            className="placeholder-zinc-100"
            type="text"
            value={props.location}
            onChange={event => props.setLocation(event.target.value)}
            onKeyPress={props.searchLocation}
            placeholder="Informe a cidade"
          />
        </div>
    );
}