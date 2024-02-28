import { apiSlice } from "../api/apiSlice";
import { BikeDTO } from "../../dto/dto";

export const bikeApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBikes: builder.query<BikeDTO[], void>({
            query: () => '/bikes',
            providesTags: (result, error, arg) => [
                {type: 'Bike', id: 'LIST'}
            ]
        }),
        addBike: builder.mutation<BikeDTO, BikeDTO>({
            query: (bikeDTO) => ({
                url: '/bikes',
                method: 'POST',
                body: bikeDTO
            }),
            invalidatesTags: (result, error, arg) => [
                {type: 'Bike', id: 'LIST'}
            ]
        }),
        deleteBike: builder.mutation<BikeDTO, string>({
            query: (id) =>({
                url: `/bikes/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: (result, error, arg) => [
                {type: 'Bike', id: arg},
                {type: 'Bike', id: 'LIST'}
            ]
        }), 
    })
})

export const { useGetBikesQuery, useAddBikeMutation, useDeleteBikeMutation} = bikeApiSlice;