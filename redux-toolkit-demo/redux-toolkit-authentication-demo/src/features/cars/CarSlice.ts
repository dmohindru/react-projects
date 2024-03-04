import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { CarDTO } from "../../dto/dto";
import { carApiSlice } from "./CarApiSlice";
import { RootState } from "../../app/store";

const carsAdapter = createEntityAdapter({
    // TODO potentially a bug
    selectId: (carDTO: CarDTO) => carDTO.id ?? '',
    sortComparer: (a, b) => a.value - b.value
});

const carsSlice = createSlice({
    name: 'cars',
    initialState: carsAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(carApiSlice.endpoints.getCars.matchFulfilled, (state, action) => {
            carsAdapter.setAll(state, action.payload);
        })
        .addMatcher(carApiSlice.endpoints.getCarById.matchFulfilled, (state, action) => {
            carsAdapter.setOne(state, action.payload)
        })
        .addMatcher(carApiSlice.endpoints.addCar.matchFulfilled, (state, action) => {
            carsAdapter.addOne(state, action.payload);
        })
        .addMatcher(carApiSlice.endpoints.updateCar.matchFulfilled, (state, action) => {
            carsAdapter.upsertOne(state, action.payload);
        })
        .addMatcher(carApiSlice.endpoints.deleteCar.matchFulfilled, (state, action) => {
            carsAdapter.removeOne(state, action.payload.id ?? '');
        })
    }
});

export const carsReducer = carsSlice.reducer;
export const { selectAll: selectAllCars, selectById: selectCarById } = carsAdapter.getSelectors((state: RootState) => state.cars);