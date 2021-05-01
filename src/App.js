import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { setTemp, setWeather } from "./redux/actions/weather";
import { setDefaultCity } from "./redux/actions/cities";

import { MainWindow, DefaultCity, AddedCity, InputAdd } from "./components";

function App() {
  const dispatch = useDispatch();

  const { defaultCityIs } = useSelector(({ cities }) => cities);

  const [customCity, setCustomCity] = useState([]);
  const [chosenCity, setChosenCity] = useState(defaultCityIs);

  const getWeatherAPI = useCallback(
    (searchQuery, firstLaunch) => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?${searchQuery}&lang=ru&units=metric&appid=b71aa60c6985f035c25ba94fec60b0f3`
        )
        .then((res) => {
          if (firstLaunch === true) {
            dispatch(setDefaultCity(res.data.name));
            setChosenCity(res.data.name);
          }
          const weatherData = res.data.weather[0].description;
          const niceViewWeatherData =
            weatherData.charAt(0).toUpperCase() + weatherData.slice(1);
          dispatch(setWeather(niceViewWeatherData));
          dispatch(setTemp(Math.floor(res.data.main.temp) + " C"));
        })
        .catch(() => {
          alert("Не получили прогноз погоды! Попробуйте обновить страницу!");
        });
    },
    [dispatch]
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const posLat = position.coords.latitude;
      const posLong = position.coords.longitude;

      getWeatherAPI(`lat=${posLat}&lon=${posLong}`, true);
    });
    navigator.geolocation.watchPosition(
      function () {},
      function (error) {
        if (error.code === error.PERMISSION_DENIED)
          getWeatherAPI("q=москва", true);
      }
    );
  }, [dispatch, getWeatherAPI]);

  return (
    <div className="App">
      <div className="App__sidebar">
        <DefaultCity
          customCity={customCity}
          setChosenCity={setChosenCity}
          getWeatherAPI={getWeatherAPI}
        />
        <AddedCity
          customCity={customCity}
          setCustomCity={setCustomCity}
          setChosenCity={setChosenCity}
          getWeatherAPI={getWeatherAPI}
        />
        <InputAdd customCity={customCity} setCustomCity={setCustomCity} />
      </div>
      <MainWindow chosenCity={chosenCity} />
    </div>
  );
}

export default App;
