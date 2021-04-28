import React, {useState, useEffect} from 'react';

import axios from 'axios';

export default function DefaultCity() {

const [defaultCity, setDefaultCity] = useState('Москва');

useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
        const posLat = position.coords.latitude;
        const posLong = position.coords.longitude;

    axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${posLat}&lon=${posLong}&lang=ru&units=metric&appid=b71aa60c6985f035c25ba94fec60b0f3`
      )
      .then((res) => setDefaultCity(res.data.name));
      });
})

    return (
        <ul className="list">
          <li className="active">
            <h1>{defaultCity}</h1>
          </li>
        </ul>
    )
}
