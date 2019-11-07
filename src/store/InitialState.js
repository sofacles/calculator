const initializeState = () => {
    return {
        stringCurrentlyBeingConcatenated: "0",
        leftOperand: 0,
        operator: "",
        preparingToClearDisplayOnNextDigit: false
      };
};

export default initializeState;
