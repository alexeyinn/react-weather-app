import { useSelector, useDispatch } from "react-redux";

import classNames from 'classnames';

import { setActiveCity } from '../redux/actions/cities';
import { setChosenCity } from "../redux/actions/cities";

import removeSVG from '../assets/img/remove.svg';

export default function AddedCity(props) {

  const dispatch = useDispatch();
  const { activeCityIs } = useSelector(({cities}) => cities);

const onActive = (e) => {
  const cityName = e.target.outerText
  dispatch(setActiveCity(cityName));
  dispatch(setChosenCity(cityName));
  props.getWeatherAPI('q=' + cityName, false)
}

const onRemove = (e) => {
  function removeFromArr(arr, value) { 
    return arr.filter(function(ele){ 
        return ele !== value; 
    });
}
props.setCustomCity(removeFromArr(props.customCity, e.target.attributes.name.value));
}

    return (
        <ul className="list">
          {(props.customCity.length !== 0) ? (props.customCity.map((cities) => (
            <li className={classNames({
              'nonActive': activeCityIs !== cities,
              'active': activeCityIs === cities
            })} key={cities}>
            <h1 onClick={onActive}>{cities}</h1>
            <img className='removeIco' src={removeSVG} alt='remove icon' name={cities} onClick={onRemove}/>
          </li>
          ))) : (
            <li className="active">
            <h2>Здесь будут ваши добавленные города...</h2>
          </li>
          )}
        </ul>
    )
}
