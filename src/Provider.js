import React from "react";
import { CalculatorStore } from "./store/CalculatorStore";
import { Provider } from "react-redux";
import App from "./App"


export default function() {
    return <Provider store={CalculatorStore}>
    <App />
</Provider>;
}; 