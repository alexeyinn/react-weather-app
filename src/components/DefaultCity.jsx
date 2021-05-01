import { useSelector } from "react-redux";

export default function DefaultCity(props) {
  const { defaultCityIs } = useSelector(({cities}) => cities);

const backToDefaultCity = (e) => {
props.setChosenCity(e.target.outerText);
props.getWeatherAPI('q=' + e.target.outerText, false)
}

    return (
        <ul className="list" onClick={backToDefaultCity}>
          <li className="active">
            <h1>{defaultCityIs}</h1>
          </li>
        </ul>
    )
}
