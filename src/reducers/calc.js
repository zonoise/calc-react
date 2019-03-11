import { INPUT_NUMBER, INPUT_PLUS, INPUT_EQUAL } from '../actionTypes';

const initialState = {
    text: "",
    display: 0,
    currentAction: INPUT_NUMBER,
    currentOperatior: null,
    tmp: 0,
};

function onInputNumber(state, inputNumber) {
    if (state.currentAction === INPUT_PLUS) {
        return {
            ...state,
            currentAction: INPUT_NUMBER,
            display: inputNumber
        }
    }

    return {
        ...state,
        currentAction: INPUT_NUMBER,
        display: state.display * 10 + inputNumber
    }
}

function onInputPlus(state) {
    switch (state.currentAction) {
        case INPUT_NUMBER:
            return {
                ...state,
                currentAction: INPUT_PLUS,
                currentOperatior: INPUT_PLUS,
                tmp: state.display + state.tmp,
                display: state.display + state.tmp,
            };
        default:
            return state;
    }

}

function onInputEqual(state) {

    switch (state.currentAction) {
        case INPUT_NUMBER:
            var display = 0;
            switch (state.currentOperatior) {
                case INPUT_PLUS:
                    display = state.tmp + state.display;
                    break;
                default:
            }

            return {
                ...state,
                display: display,
                tmp: 0,
            }

        default:
            return state;
    }
}

export default function calcReducer(state = initialState, action) {
    switch (action.type) {
        case INPUT_NUMBER:
            return onInputNumber(state, action.payload.input_number)
        case INPUT_PLUS:
            return onInputPlus(state)
        case INPUT_EQUAL:
            return onInputEqual(state)
        default:
            return state;
    }
}