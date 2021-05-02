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

      return {
        weather: [
          {
            weatherDescription: "Погодные условия",
            weatherData: niceViewWeatherText,
          },
          {
            weatherDescription: "Температура воздуха",
            weatherData: Math.floor(weatherData.main.temp) + " C",
          },
        ],
      };
    }

    default:
      return state;
  }
};

export default weather;
