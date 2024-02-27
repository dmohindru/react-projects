import { apiSlice } from "../api/apiSlice";
import { CarDTO } from "../../dto/dto";

export const carApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCars: builder.query<CarDTO[], void>({
            query: () => '/cars',
            providesTags: (result, error, arg) => [
                { type: 'Car', id: 'LIST'}
            ]
        }),
        deleteCar: builder.mutation<CarDTO, string>({
            query: (id) => ({
                url: `/cars/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: (result, error, arg) => [
                {type: 'Car', id: arg},
                {type: 'Car', id: 'LIST'}
            ]
        })
    })
});

export const { useGetCarsQuery, useDeleteCarMutation } = carApiSlice;