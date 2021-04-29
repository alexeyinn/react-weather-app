import React, { useState } from 'react';

import axios from 'axios';
import classNames from 'classnames';

import removeSVG from '../assets/img/remove.svg';

export default function AddedCity(props) {

const [activeClass, setActiveClass] = useState('');

const onActive = (e) => {
  setActiveClass(e.target.innerText);
}

const chosenCity = (e) => {
  props.setChosenCity(e.target.outerText);

  axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${e.target.outerText}&lang=ru&units=metric&APPID=b71aa60c6985f035c25ba94fec60b0f3`
        )
        .then((res) => {
          const weatherData = res.data.weather[0].description;
          const niceViewWeatherData =
            weatherData.charAt(0).toUpperCase() + weatherData.slice(1);
          props.setCurrentWeather(niceViewWeatherData);
          props.setCurrentTemp(Math.floor(res.data.main.temp) + " C");
        })
        .catch(() => {
          alert("Не получили прогногз погоды от сервера! Проверьте название города и попробуйте его добавить снова в список отслеживания!");
        });
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
            <li className={classNames('nonActive', {
              'active': activeClass === cities
            })} key={cities} onClick={onActive}>
            <h1 onClick={chosenCity}>{cities}</h1>
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
