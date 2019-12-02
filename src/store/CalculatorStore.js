import { createStore } from "redux";
import initializeState from "./InitialState";
import { UpdateLeftOperand } from "./ReducerHelper";


const CalculatorStore = createStore((state = initializeState(), action) => {
  switch (action.type) {
    case "numberKey": {
      return {
        ...state,
        stringCurrentlyBeingConcatenated: state.stringCurrentlyBeingConcatenated.concat(action.payload)
      };
    }

    case "ADD":
    case "SUBTRACT":
    case "MULTIPLY":
    case "DIVIDE": {
      // We have nothing to operate on yet.  Push leftOperand onto state so we can deal with it next time we
      // get an operation to apply
      if (state.leftOperand === 0) {
        return {
          ...state,
          leftOperand: parseFloat(state.stringCurrentlyBeingConcatenated),
          operator: action.type,
          preparingToClearDisplayOnNextDigit: true
        };
      } else if (state.preparingToClearDisplayOnNextDigit) {
        return { ...state, operator: action.type };
      } else {
        //We already have one term, so this is kind of like hitting the enter key
        const newState = UpdateLeftOperand(state);
        return {
          ...newState,
          operator: action.type
        };
      }
    }

    default:
      return state;
  }
});

export { CalculatorStore };
