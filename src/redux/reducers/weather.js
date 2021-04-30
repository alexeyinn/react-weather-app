const initialState = {
  weatherIs: "Небольшая облачность",
  tempIs: "13 C",
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WEATHER": {
      return {
        weatherIs: action.payload,
      };
    }

    case "SET_TEMP": {
      return {
        tempIs: action.payload,
      };
    }

    default:
      return state;
  }
};

export default weather;
