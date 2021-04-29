const initialState = {
  activeCityIs: "",
};

const activeCity = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_CITY": {
      return {
        activeCityIs: action.payload,
      };
    }

    default:
      return state;
  }
};

export default activeCity;
