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
      if (state.termToBeApplied === 0) {
        //then we're still building up the first number, the first operand
        //get rid of trailing zeroes

        while (trimmed[0] === "0") {
          trimmed = trimmed.slice(1);
        }
      }
      // This should only happen on the first key after an operation key has been pressed
      if (
        parseInt(state.stringCurrentlyBeingConcatenated) ===
        state.termToBeApplied
      ) {
        return {
          ...state,
          stringCurrentlyBeingConcatenated: "" + action.payload
        };
      }

      return {
        ...state,
        stringCurrentlyBeingConcatenated: trimmed.concat(action.payload)
      };
    }

    case "ADD":
    case "SUBTRACT":
    case "MULTIPLY": {
      if (state.termToBeApplied === 0) {
        return {
          ...state,
          termToBeApplied: parseInt(state.stringCurrentlyBeingConcatenated),
          operand: action.type
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
