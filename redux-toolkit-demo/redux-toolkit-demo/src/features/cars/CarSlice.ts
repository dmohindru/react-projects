import { apiSlice } from "../api/apiSlice";
import { CarDTO } from "../../dto/dto";

export const carApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCars: builder.query<CarDTO[], void>({
            query: () => '/cars'
        })
    })
});

export const { useGetCarsQuery } = carApiSlice;