const initialState = {
  activeCityIs: "",
  defaultCityIs: "Москва",
  chosenCityIs: "Москва",
};

const cities = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_CITY": {
      return {
        ...state,
        activeCityIs: action.payload,
      };
    }

    case "SET_DEFAULT_CITY": {
      return {
        ...state,
        defaultCityIs: action.payload,
      };
    }

    case "SET_CHOSEN_CITY": {
      return {
        ...state,
        chosenCityIs: action.payload,
      };
    }

    default:
      return state;
  }
};

export default cities;
