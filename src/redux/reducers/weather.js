const initialState = {
  weather: [],
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WEATHER": {
      const weatherData = action.payload;
      const stateOfWeather = weatherData.weather[0].description;
      const niceViewWeatherText =
        stateOfWeather.charAt(0).toUpperCase() +
        weatherData.weather[0].description.slice(1);

      const translatingDate = (dataSpamp, timeZone) => {
        const date = new Date((dataSpamp - (10800 - timeZone)) * 1000);
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        const seconds = "0" + date.getSeconds();
        return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
      };
      const sunrise = translatingDate(
        weatherData.sys.sunrise,
        weatherData.timezone
      );
      const sunset = translatingDate(
        weatherData.sys.sunset,
        weatherData.timezone
      );

      return {
        weather: [
          {
            id: 0,
            weatherDescription: "Погодные условия",
            weatherData: niceViewWeatherText,
          },
          {
            id: 1,
            weatherDescription: "Температура воздуха",
            weatherData: Math.floor(weatherData.main.temp) + " C",
          },
          {
            id: 2,
            weatherDescription: "Чувствуется как",
            weatherData: Math.floor(weatherData.main.feels_like) + " C",
          },
          {
            id: 3,
            weatherDescription: "Атмосферное давление",
            weatherData:
              Math.floor(weatherData.main.pressure * 0.750062) + " мм.рт.ст.",
          },
          {
            id: 4,
            weatherDescription: "Влажность",
            weatherData: weatherData.main.humidity + "%",
          },
          {
            id: 8,
            weatherDescription: "Скорость ветра",
            weatherData: weatherData.wind.speed + " м/c",
          },
          {
            id: 5,
            weatherDescription: "Время восхода солцна",
            weatherData: sunrise,
          },
          {
            id: 6,
            weatherDescription: "Время заката солцна",
            weatherData: sunset,
          },
          {
            id: 7,
            weatherDescription: "Видимость на дорогах",
            weatherData: weatherData.visibility + " м.",
          },
        ],
      };
    }

    default:
      return state;
  }
};

export default weather;
