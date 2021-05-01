const initialState = {
  activeCityIs: "",
  defaultCityIs: "Москва",
  chosenCityIs: "Москва",
  addedCity: [],
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

    case "ADD_CITY": {
      function titleCase(str) {
        let splitStr = str.toLowerCase().split(" ");
        for (let i = 0; i < splitStr.length; i++) {
          splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
        }
        return splitStr.join(" ");
      }
      const niceViwedData = titleCase(action.payload);

      return {
        ...state,
        addedCity: [...state.addedCity, niceViwedData],
      };
    }

    case "REMOVE_CITY": {
      function removeFromArr(arr, value) {
        return arr.filter(function (ele) {
          return ele !== value;
        });
      }
      const finalList = removeFromArr(state.addedCity, action.payload);
      return {
        ...state,
        addedCity: finalList,
      };
    }

    default:
      return state;
  }
};

export default cities;
