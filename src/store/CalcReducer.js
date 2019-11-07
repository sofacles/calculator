import {UpdateTermToBeApplied} from "./ReducerHelper"

/*
If I had just typed <2>, <3>, <+> 
running total would be 23
operand would be "plus"

then when I type <2> I set termToBeApplied to 2

then when <enter> is pressed, we'll have an action called "calculate" or something which looks at runningTotal
and the operand and the termToBeApplied and does some kind of math

*/

const CalcReducer = (state, action) => {
  // The "termToBeApplied" is the left hand side of whatever last operator is. It is the result of all the 
  // operations up until now.  I am ignoring Order of Operations for now (can't remember if a real calculator
  // supports Order or Op. or not)
  
  switch (action.type) {
    case "DIGIT": {
      let trimmed = state.stringCurrentlyBeingConcatenated;
      
      //get rid of trailing zeroes
      while (trimmed[0] === "0") {
        trimmed = trimmed.slice(1);
      }

      // If they've entered one term already and an operand and this is the first digit of the new term, we need to reset the 
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
      if (state.termToBeApplied === 0) {
        return {
          ...state,
          termToBeApplied: parseFloat(state.stringCurrentlyBeingConcatenated),
          operand: action.type,
          preparingToClearDisplayOnNextDigit: true
        };
      } else {
        //We already have one term, so this is kind of like hitting the enter key
        const newState = UpdateTermToBeApplied(state);
        return {
          ...newState,
          operand: action.type
        }
      }
    }

    case "ENTER": {
      if (state.operand === "") {
        return {
          ...state
        };
      }
      
      return UpdateTermToBeApplied(state)
    }
    
    default:
      return state;
  }
};

export default CalcReducer;
