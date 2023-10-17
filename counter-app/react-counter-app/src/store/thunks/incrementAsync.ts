import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCount } from "../slice/counterAPI";
export interface ThunkData {
    amount: number;
    delay: number;
}

const incrementNumericAsync = createAsyncThunk(
    'counter/fetchCount',
    async (thunkData: ThunkData) => {
        const response = await fetchCount(thunkData);

        return response.data;
    }
);

const incrementAlphaNumericAsync = createAsyncThunk(
    'alphaCounter/fetchCount',
    async (thunkData: ThunkData) => {
        const response = await fetchCount(thunkData);

        return response.data;
    }
)


export { incrementNumericAsync, incrementAlphaNumericAsync };