import React, { useEffect, useCallback } from "react";

import axios from "axios";
import { useDispatch } from "react-redux";

import { setWeather } from "./redux/actions/weather";
import { setDefaultCity, setChosenCity } from "./redux/actions/cities";

import { MainWindow, DefaultCity, AddedCity, InputAdd } from "./components";
//ToDo Добавить карточки погоды
function App() {
  const dispatch = useDispatch();

  const getWeatherAPI = useCallback(
    (searchQuery, firstLaunch) => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?${searchQuery}&lang=ru&units=metric&appid=b71aa60c6985f035c25ba94fec60b0f3`
        )
        .then((res) => {
          if (firstLaunch === true) {
            dispatch(setDefaultCity(res.data.name));
            dispatch(setChosenCity(res.data.name));
          }
          dispatch(setWeather(res.data));
        })
        .catch(() => {
          alert(
            "Не получили прогноз погоды! Проверьте название города и попробуйте снова!"
          );
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
        <DefaultCity getWeatherAPI={getWeatherAPI} />
        <AddedCity getWeatherAPI={getWeatherAPI} />
        <InputAdd />
      </div>
      <MainWindow />
    </div>
  );
}

export default App;
