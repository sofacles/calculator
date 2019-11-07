const initializeState = () => {
    return {
        runningTotal: 0,
        stringCurrentlyBeingConcatenated: "0",
        leftOperand: 0,
        operator: "",
        preparingToClearDisplayOnNextDigit: false
      };
};

export default initializeState;
