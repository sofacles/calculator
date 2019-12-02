import React from "react";
import CalcReducer from "./store/CalculatorStore";
import { Provider } from "react-redux";
import App from "./App"


export default function() {
    return <Provider store={CalcReducer}>
    <App />
</Provider>;
}; 