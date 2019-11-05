/*
If I had just typed <2>, <3>, <+> 
running total would be 23
operand would be "plus"

then when I type <2> I set termToBeApplied to 2

then when <enter> is pressed, we'll have an action called "calculate" or something which looks at runningTotal
and the operand and the termToBeApplied and does some kind of math

*/

const CalcReducer = (state, action) => {
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
      break;
    }

    case "ADD": {
      if (state.termToBeApplied === 0) {
        return {
          ...state,
          termToBeApplied: parseInt(state.stringCurrentlyBeingConcatenated),
          operand: "ADD"
        };
      }
      break;
    }

    case "SUBTRACT": {
      if (state.termToBeApplied === 0) {
        return {
          ...state,
          termToBeApplied: parseInt(state.stringCurrentlyBeingConcatenated),
          operand: "SUBTRACT"
        };
      }
      break;
    }

    case "ENTER": {
      if (state.operand === "") {
        return {
          ...state
        };
      }
      if (state.operand === "ADD") {
        let sum =
          state.termToBeApplied +
          parseInt(state.stringCurrentlyBeingConcatenated);
        return {
          ...state,
          termToBeApplied: sum,
          stringCurrentlyBeingConcatenated: sum + ""
        };
      }
      if (state.operand === "SUBTRACT") {
        let difference =
          state.termToBeApplied -
          parseInt(state.stringCurrentlyBeingConcatenated);
        return {
          ...state,
          termToBeApplied: difference,
          stringCurrentlyBeingConcatenated: difference + ""
        };
      }
      break;
    }

    default:
      return state;
  }
};

export default CalcReducer;
