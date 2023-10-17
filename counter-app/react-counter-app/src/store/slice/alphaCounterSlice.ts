import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { incrementAlphaNumericAsync } from "../thunks/incrementAsync";

interface AlphaCounterValue {
    value: string;
    status: 'idle' | 'loading' | 'failed';
}

const initialAlphaCounterState: AlphaCounterValue = {
    value: 'A',
    status: 'idle'
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
        alphaIncrementByValue: (state: AlphaCounterValue, action: PayloadAction<number>) => {
            // TODO improve logic here to wrap around to A if value crosses Z value
            state.value = String.fromCharCode(state.value.charCodeAt(0) + action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAlphaNumericAsync.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(incrementAlphaNumericAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value = String.fromCharCode(state.value.charCodeAt(0) + action.payload);
        })
        .addCase(incrementAlphaNumericAsync.rejected, (state, action) => {
            state.status = 'failed';
        })
    }
});

export const {incrementAlpha, decrementAlpha, resetAlpha, alphaIncrementByValue} = alphaCounterSlice.actions;
export const alphaCounterReducer = alphaCounterSlice.reducer;