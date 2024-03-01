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
        getBikeById: builder.query<BikeDTO, string>({
            query: (id) => `/bikes/${id}`,
            providesTags: (result, error, arg) => [
                {type: 'Bike', id: result?.id}
            ]
        }),
        addBike: builder.mutation<BikeDTO, BikeDTO>({
            query: (bikeDTO) => ({
                url: '/bikes',
                method: 'POST',
                body: bikeDTO
            }),
        }),
        updateBike: builder.mutation<BikeDTO, BikeDTO>({
            query: (bikeDTO) => ({
                url: `/bikes/${bikeDTO.id}`,
                method: 'PUT',
                body: bikeDTO
            }),
            invalidatesTags: (result, error, arg) => [
                {type: 'Bike', id: result?.id}
            ]
        }),
        deleteBike: builder.mutation<BikeDTO, string>({
            query: (id) =>({
                url: `/bikes/${id}`,
                method: 'DELETE'
            }),
        }), 
    })
});

export const { useGetBikesQuery, useGetBikeByIdQuery, useAddBikeMutation, useUpdateBikeMutation, useDeleteBikeMutation} = bikeApiSlice;