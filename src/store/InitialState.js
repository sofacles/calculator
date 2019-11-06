const initializeState = () => {
    return {
        runningTotal: 0,
        stringCurrentlyBeingConcatenated: "0",
        termToBeApplied: 0,
        operand: "",
        preparingToClearDisplayOnNextDigit: false
      };
};

export default initializeState;
