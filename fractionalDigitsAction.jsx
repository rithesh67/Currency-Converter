// fractionalDigitsActions.js
export default fractionalDigitsReducer(){}
export const setFractionalDigits = (digits) => ({
  type: "SET_FRACTIONAL_DIGITS",
  payload: digits,
});

// fractionalDigitsReducer.js
const initialState = {
  digits: "2", // Default value
};

const fractionalDigitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FRACTIONAL_DIGITS":
      return {
        ...state,
        digits: action.payload,
      };
    default:
      return state;
  }
};

;
