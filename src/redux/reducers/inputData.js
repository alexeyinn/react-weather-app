const initialState = {
  inputDataIs: "",
};

const inputData = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INPUT_DATA": {
      return {
        inputDataIs: action.payload,
      };
    }

    default:
      return state;
  }
};

export default inputData;
