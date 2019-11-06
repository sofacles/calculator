const UpdateTermToBeApplied = state => {
  if (state.operand === "ADD") {
    let sum =
      state.termToBeApplied + parseInt(state.stringCurrentlyBeingConcatenated);
    return {
      ...state,
      termToBeApplied: sum,
      stringCurrentlyBeingConcatenated: sum + "",
      preparingToClearDisplayOnNextDigit: true
    };
  }
  if (state.operand === "SUBTRACT") {
    let difference =
      state.termToBeApplied - parseInt(state.stringCurrentlyBeingConcatenated);
    return {
      ...state,
      termToBeApplied: difference,
      stringCurrentlyBeingConcatenated: difference + "",
      preparingToClearDisplayOnNextDigit: true
    };
  }

  if (state.operand === "MULTIPLY") {
    let product =
      state.termToBeApplied * parseInt(state.stringCurrentlyBeingConcatenated);
    return {
      ...state,
      termToBeApplied: product,
      stringCurrentlyBeingConcatenated: product + "",
      preparingToClearDisplayOnNextDigit: true
    };
  }
};

export { UpdateTermToBeApplied };
