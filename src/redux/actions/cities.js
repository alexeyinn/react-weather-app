export const setActiveCity = (activeCity) => ({
  type: "SET_ACTIVE_CITY",
  payload: activeCity,
});

export const setDefaultCity = (defaultCity) => ({
  type: "SET_DEFAULT_CITY",
  payload: defaultCity,
});

export const setChosenCity = (chosenCity) => ({
  type: "SET_CHOSEN_CITY",
  payload: chosenCity,
});

export const addCity = (addedCity) => ({
  type: "ADD_CITY",
  payload: addedCity,
});

export const removeCity = (removedCity) => ({
  type: "REMOVE_CITY",
  payload: removedCity,
});
