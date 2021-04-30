export default function DefaultCity(props) {
const backToDefaultCity = (e) => {
props.setChosenCity(e.target.outerText);
props.getWeatherAPI('q=' + e.target.outerText, false)
}

    return (
        <ul className="list" onClick={backToDefaultCity}>
          <li className="active">
            <h1>{props.defaultCity}</h1>
          </li>
        </ul>
    )
}
