const initialState = {
  weatherIs: "Небольшая облачность",
  tempIs: "13 C",
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WEATHER": {
      return {
        ...state,
        weatherIs: action.payload,
      };
    }

    case "SET_TEMP": {
      return {
        ...state,
        tempIs: action.payload,
      };
    }

    default:
      return state;
  }
};

export default weather;