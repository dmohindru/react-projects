import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { BikeDTO } from "../../dto/dto";
import { bikeApiSlice } from "./BikeApiSlice";
import { RootState } from "../../app/store";

const bikeAdapter = createEntityAdapter({
    selectId: (bikeDTO: BikeDTO) => bikeDTO.id ?? '',
    sortComparer: (a, b) => a.value - b.value
})

const bikesSlice = createSlice({
    name: 'bikes',
    initialState: bikeAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(bikeApiSlice.endpoints.getBikes.matchFulfilled, (state, action) => {
            bikeAdapter.setAll(state, action.payload);
        })
        .addMatcher(bikeApiSlice.endpoints.getBikeById.matchFulfilled, (state, action) => {
            bikeAdapter.setOne(state, action.payload);
        })
        .addMatcher(bikeApiSlice.endpoints.addBike.matchFulfilled, (state, action) => {
            bikeAdapter.addOne(state, action.payload);
        })
        .addMatcher(bikeApiSlice.endpoints.updateBike.matchFulfilled, (state, action) => {
            bikeAdapter.upsertOne(state, action.payload);
        })
        .addMatcher(bikeApiSlice.endpoints.deleteBike.matchFulfilled, (state, action) => {
            bikeAdapter.removeOne(state, action.payload.id ?? '')
        })
    }
});

export const bikesReducer = bikesSlice.reducer;
export const { selectAll: selectAllBikes, selectById: selectBikeById } = bikeAdapter.getSelectors((state: RootState) => state.bikes);