const UpdateTermToBeApplied = state => {
  if (state.operand === "ADD") {
    let sum =
      state.termToBeApplied + parseInt(state.stringCurrentlyBeingConcatenated);
    return {
      ...state,
      termToBeApplied: sum,
      stringCurrentlyBeingConcatenated: sum + ""
    };
  }
  if (state.operand === "SUBTRACT") {
    let difference =
      state.termToBeApplied - parseInt(state.stringCurrentlyBeingConcatenated);
    return {
      ...state,
      termToBeApplied: difference,
      stringCurrentlyBeingConcatenated: difference + ""
    };
  }

  if (state.operand === "MULTIPLY") {
    let product =
      state.termToBeApplied * parseInt(state.stringCurrentlyBeingConcatenated);
    return {
      ...state,
      termToBeApplied: product,
      stringCurrentlyBeingConcatenated: product + ""
    };
  }
};

export { UpdateTermToBeApplied };
