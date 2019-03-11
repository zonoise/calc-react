import { INPUT_NUMBER, INPUT_PLUS, INPUT_EQUAL } from '../actionTypes';

export const inputNumber = (number) => {
    console.log(number);
    console.log(INPUT_NUMBER);

    return {
        type: INPUT_NUMBER,
        payload: {
            input_number: number
        }
    }
};

export const inputPlus = () => {
    console.log(INPUT_PLUS);

    return {
        type: INPUT_PLUS
    }
};

export const inputEqual = () => {
    console.log(INPUT_EQUAL);

    return {
        type: INPUT_EQUAL
    }
};
