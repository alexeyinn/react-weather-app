import { useSelector, useDispatch } from "react-redux";

import { setChosenCity, setActiveCity } from "../redux/actions/cities";

export default function DefaultCity(props) {
  const dispatch = useDispatch();
  const { defaultCityIs } = useSelector(({cities}) => cities);

const backToDefaultCity = (e) => {
const cityName = e.target.outerText
  dispatch(setChosenCity(cityName));
props.getWeatherAPI('q=' + cityName, false)
dispatch(setActiveCity(cityName));
}

    return (
        <ul className="list" onClick={backToDefaultCity}>
          <li className="active">
            <h1>{defaultCityIs}</h1>
          </li>
        </ul>
    )
}
