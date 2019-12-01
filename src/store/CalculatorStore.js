import { createStore } from "redux";

const initialState = {
  operand: 0,
  operator: "",
  stringBeingDisplayed: ""
};
const CalculatorStore = createStore((state = initialState, action) => {
  switch (action.type) {
    case "numberKey":
      {
        return {
          ...state,
          stringBeingDisplayed: state.stringBeingDisplayed.concat(
            action.payload
          )
        };
      }

    default:
      return state;
  }
});

export { CalculatorStore };
