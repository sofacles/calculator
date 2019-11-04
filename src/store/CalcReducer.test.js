import CalcReducer from "./CalcReducer";
import InitializeState from "./InitialState";

describe("CalcReducer", () => {
     let theState;
    beforeEach(() => {
        theState = InitializeState();
    });

    it("changes stringCurrentlyBeingDisplayed to 1 after hitting the 1 key", () => {
        let newState = CalcReducer(theState, {type: "DIGIT", payload: "1"});
        expect(newState.stringCurrentlyBeingConcatenated).toEqual("1");
    });

    it("changes stringCurrentlyBeingDisplayed to 12 after hitting the 1 key and the 2 key", () => {
        let newState = CalcReducer(theState, {type: "DIGIT", payload: "1"});
        newState = CalcReducer(newState, {type: "DIGIT", payload: "2"});
        expect(newState.stringCurrentlyBeingConcatenated).toEqual("12");
    });

    it("changes stringCurrentlyBeingDisplayed to 2 after DIGIT:1, 'add', DIGIT:1, 'enter'", () => {
        let newState = CalcReducer(theState, {type: "DIGIT", payload: "1"});
        newState = CalcReducer(newState, {type: "ADD"});
        newState = CalcReducer(newState, {type: "DIGIT", payload: "1"});
        newState = CalcReducer(newState, {type: "ENTER"});
        expect(newState.stringCurrentlyBeingConcatenated).toEqual("2");
    });

    it("changes stringCurrentlyBeingDisplayed to 12 after DIGIT:1,DIGIT:1, 'add', DIGIT:1, 'enter'", () => {
        let newState = CalcReducer(theState, {type: "DIGIT", payload: "1"});
        newState = CalcReducer(newState, {type: "DIGIT", payload: "1"});
        newState = CalcReducer(newState, {type: "ADD"});
        newState = CalcReducer(newState, {type: "DIGIT", payload: "1"});
        newState = CalcReducer(newState, {type: "ENTER"});
        expect(newState.stringCurrentlyBeingConcatenated).toEqual("12");
    });
});