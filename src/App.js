import React, { useState, useEffect } from "react";

import axios from "axios";
import { useDispatch } from "react-redux";

import { setTemp } from "./redux/actions/weather";

import { MainWindow, DefaultCity, AddedCity, InputAdd } from "./components";

function App() {
  const dispatch = useDispatch();

  const [defaultCity, setDefaultCity] = useState("Москва");
  const [currentWeather, setCurrentWeather] = useState("Небольшая облачность");
  const [customCity, setCustomCity] = useState([]);
  const [chosenCity, setChosenCity] = useState(defaultCity);

  useEffect(() => {
    const defaultCityWeather = (searchQuery) => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?${searchQuery}&lang=ru&units=metric&appid=b71aa60c6985f035c25ba94fec60b0f3`
        )
        .then((res) => {
          setDefaultCity(res.data.name);
          setChosenCity(res.data.name);
          const weatherData = res.data.weather[0].description;
          const niceViewWeatherData =
            weatherData.charAt(0).toUpperCase() + weatherData.slice(1);
          setCurrentWeather(niceViewWeatherData);
          dispatch(setTemp(Math.floor(res.data.main.temp) + " C"));
        })
        .catch(() => {
          alert("Не получили прогноз погоды! Попробуйте обновить страницу!");
        });
    };

    defaultCityWeather("q=москва");

    navigator.geolocation.getCurrentPosition(function (position) {
      const posLat = position.coords.latitude;
      const posLong = position.coords.longitude;

      defaultCityWeather(`lat=${posLat}&lon=${posLong}`);
    });
  }, [dispatch]);

  return (
    <div className="App">
      <div className="App__sidebar">
        <DefaultCity
          defaultCity={defaultCity}
          customCity={customCity}
          setDefaultCity={setDefaultCity}
          setChosenCity={setChosenCity}
          setCurrentWeather={setCurrentWeather}
        />
        <AddedCity
          customCity={customCity}
          setCustomCity={setCustomCity}
          setDefaultCity={setDefaultCity}
          setChosenCity={setChosenCity}
          setCurrentWeather={setCurrentWeather}
        />
        <InputAdd customCity={customCity} setCustomCity={setCustomCity} />
      </div>
      <MainWindow
        defaultCity={defaultCity}
        currentWeather={currentWeather}
        chosenCity={chosenCity}
      />
    </div>
  );
}

export default App;
