import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import { carsReducer } from "../features/cars/CarSlice";
import { bikesReducer } from "../features/bikes/BikeSlice";
import { authReducer } from "../features/auth/authSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cars: carsReducer,
        bikes: bikesReducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };