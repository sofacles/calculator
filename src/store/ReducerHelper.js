const UpdateleftOperand = state => {
  if (state.operator === "ADD") {
    let sum =
      state.leftOperand +
      correctFloatParse(state.stringCurrentlyBeingConcatenated);
    return {
      ...state,
      leftOperand: sum,
      stringCurrentlyBeingConcatenated: sum + "",
      preparingToClearDisplayOnNextDigit: true
    };
  }
  if (state.operator === "SUBTRACT") {
    let difference = correctFloatParse(
      state.leftOperand - state.stringCurrentlyBeingConcatenated
    );
    return {
      ...state,
      leftOperand: difference,
      stringCurrentlyBeingConcatenated: difference + "",
      preparingToClearDisplayOnNextDigit: true
    };
  }

  if (state.operator === "MULTIPLY") {
    let product =
      state.leftOperand *
      correctFloatParse(state.stringCurrentlyBeingConcatenated);
    return {
      ...state,
      leftOperand: product,
      stringCurrentlyBeingConcatenated: product + "",
      preparingToClearDisplayOnNextDigit: true
    };
  }

  if (state.operator === "DIVIDE") {
    let quotient =
      state.leftOperand /
      correctFloatParse(state.stringCurrentlyBeingConcatenated);
    return {
      ...state,
      leftOperand: quotient,
      stringCurrentlyBeingConcatenated: quotient + "",
      preparingToClearDisplayOnNextDigit: true
    };
  }
};

const correctFloatParse = numberString => {
  let withTrailingZeros = parseFloat(numberString).toPrecision(8);
  //Now we might end up with something like 0.20000000000, so convert to string and remove trailing zeros
  let stringWithZeros = withTrailingZeros + "";
  stringWithZeros = stringWithZeros.trimRight("0");
  return parseFloat(stringWithZeros);
};

export { UpdateleftOperand };
