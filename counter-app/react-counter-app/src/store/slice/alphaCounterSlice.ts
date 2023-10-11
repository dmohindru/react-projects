import { createSlice } from "@reduxjs/toolkit";
import { CounterAction } from './counterSlice';

interface AlphaCounterValue {
    value: string;
}

const initialAlphaCounterState: AlphaCounterValue = {
    value: 'A'
}

const alphaCounterSlice = createSlice({
    name: 'alphaCounter',
    initialState: initialAlphaCounterState,
    reducers: {
        incrementAlpha: (state: AlphaCounterValue) => {
            if (state.value === 'Z') {
                state.value = 'A';
            } else {
                state.value = String.fromCharCode(state.value.charCodeAt(0) + 1);
            }
        },
        decrementAlpha: (state: AlphaCounterValue) => {
            if (state.value === 'A') {
                state.value = 'Z';
            } else {
                state.value = String.fromCharCode(state.value.charCodeAt(0) - 1);
            }
        },
        resetAlpha: (state: AlphaCounterValue) => {
            state.value = initialAlphaCounterState.value;
        },
        alphaIncrementByValue: (state: AlphaCounterValue, value: CounterAction) => {
            state.value = String.fromCharCode(state.value.charCodeAt(0) + value.payload);
        }

    }
});

export const {incrementAlpha, decrementAlpha, resetAlpha, alphaIncrementByValue} = alphaCounterSlice.actions;
export const alphaCounterReducer = alphaCounterSlice.reducer;