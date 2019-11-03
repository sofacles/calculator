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
      if (state.termToBeApplied === 0) {
        //then we're still building up the first number, the first operand
        return {
          ...state,
          stringCurrentlyBeingConcatenated: state.stringCurrentlyBeingConcatenated.concat(
            action.payload
          )
        };
      }
      break;
    }

    default: return state;
  }
};


export default CalcReducer;
