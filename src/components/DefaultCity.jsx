import { useSelector, useDispatch } from "react-redux";

import { setChosenCity } from "../redux/actions/cities";

export default function DefaultCity(props) {
  const dispatch = useDispatch();
  const { defaultCityIs } = useSelector(({cities}) => cities);

const backToDefaultCity = (e) => {
dispatch(setChosenCity(e.target.outerText));
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
