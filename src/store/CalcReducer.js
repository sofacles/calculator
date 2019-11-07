import {UpdateleftOperand} from "./ReducerHelper"

/*
If I had just typed <2>, <3>, <+> 
running total would be 23
operator would be "plus"

then when I type <2> I set leftOperand to 2

then when <enter> is pressed, we'll have an action called "calculate" or something which looks at runningTotal
and the operator and the leftOperand and does some kind of math

*/

const CalcReducer = (state, action) => {
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
      const newStringToAddTo = state.preparingToClearDisplayOnNextDigit ? "" : trimmed;
        
      return {
        ...state,
        stringCurrentlyBeingConcatenated: newStringToAddTo.concat(action.payload),
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
      } else {
        //We already have one term, so this is kind of like hitting the enter key
        const newState = UpdateleftOperand(state);
        return {
          ...newState,
          operator: action.type
        }
      }
    }

    case "ENTER": {
      if (state.operator === "") {
        return {
          ...state
        };
      }
      
      return UpdateleftOperand(state)
    }
    
    default:
      return state;
  }
};

export default CalcReducer;
