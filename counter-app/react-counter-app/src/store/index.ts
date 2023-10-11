import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, increment, decrement, reset, incrementByValue } from "./slice/counterSlice";
import { alphaCounterReducer, incrementAlpha, decrementAlpha, resetAlpha, alphaIncrementByValue } from "./slice/alphaCounterSlice";
const store = configureStore({
    reducer: {
        counter: counterReducer,
        alphaCounter: alphaCounterReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, increment, decrement, reset, incrementByValue, incrementAlpha, decrementAlpha, resetAlpha, alphaIncrementByValue };