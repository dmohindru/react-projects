import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { incrementNumericAsync } from "../thunks/incrementAsync";

interface CounterValue {
    value: number;
    status: 'idle' | 'loading' | 'failed';
}

const initialCounterState: CounterValue = {
    value: 1,
    status: 'idle'
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
        incrementByValue: (state: CounterValue, payload: PayloadAction<number>) => {
            state.value += payload.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementNumericAsync.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(incrementNumericAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value += action.payload
        })
        .addCase(incrementNumericAsync.rejected, (state, action) => {
            state.status = 'failed';
        })
    }
});

export const {increment, decrement, reset, incrementByValue } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
