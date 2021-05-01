const initialState = {
  weatherIs: "Небольшая облачность",
  tempIs: "13 C",
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WEATHER": {
      const weatherData = action.weather;
      const niceViewWeatherData =
        weatherData.charAt(0).toUpperCase() + weatherData.slice(1);

      return {
        weatherIs: niceViewWeatherData,
        tempIs: Math.floor(action.temp) + " C",
      };
    }

    default:
      return state;
  }
};

export default weather;
