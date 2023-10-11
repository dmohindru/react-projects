import { createSlice } from "@reduxjs/toolkit";

interface CounterValue {
    value: number;
}

export interface CounterAction {
    payload: number;
    type: string;
}

const initialCounterState: CounterValue = {
    value: 1
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState, 
    reducers: {
        increment: (state: CounterValue) => {
            state.value += 1;
        },
        decrement: (state: CounterValue) => {
            state.value -= 1;
        },
        reset: (state: CounterValue) => {
            state.value = initialCounterState.value;
        },
        incrementByValue: (state: CounterValue, value: CounterAction) => {
            state.value += value.payload;
        }

    }
});

export const {increment, decrement, reset, incrementByValue } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
