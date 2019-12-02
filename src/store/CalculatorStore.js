import { createStore } from "redux";
import initializeState from "./InitialState";
import { UpdateLeftOperand } from "./ReducerHelper";

const CalcReducer = (state = initializeState(), action) => {
  // The "leftOperand" is the left hand side of whatever last operator is. It is the result of all the
  // operations up until now.  I am ignoring Order of Operations for now (can't remember if a real calculator
  // supports Order or Op. or not)

  switch (action.type) {
    case "DIGIT": {
      let trimmed = state.stringCurrentlyBeingConcatenated;

      //get rid of leading zeroes
      while (trimmed[0] === "0") {
        trimmed = trimmed.slice(1);
      }

      // If they've entered one term already and an operator and this is the first digit of the new term, we need to reset the
      // stringCurrentlyBeingConcatenated before we append the new digit.
      const newStringToAddTo = state.preparingToClearDisplayOnNextDigit
        ? ""
        : trimmed;

      return {
        ...state,
        stringCurrentlyBeingConcatenated: newStringToAddTo.concat(
          action.payload
        ),
        preparingToClearDisplayOnNextDigit: false
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

    case "ENTER": {
      if (state.operator === "") {
        return {
          ...state
        };
      }

      return UpdateLeftOperand(state);
    }

    default:
      return state;
  }
};


const CalculatorStore = createStore(CalcReducer);

export default CalculatorStore;
