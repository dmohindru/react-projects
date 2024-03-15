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
        getCarById: builder.query<CarDTO, string>({
            query: (id) => `/cars/${id}`,
            providesTags: (result, error, arg) => [
                {type: 'Car', id: result?.id}
            ]
        }),
        addCar: builder.mutation<CarDTO, CarDTO>({
            query: (carDTO) => ({
                url: '/cars',
                method: 'POST',
                body: carDTO
            }),
        }),
        updateCar: builder.mutation<CarDTO, CarDTO>({
            query: (carDTO) => ({
                url: `/cars/${carDTO.id}`,
                method: 'PUT',
                body: carDTO
            }),
            invalidatesTags: (result, error, arg) => [
                {type: 'Car', id: result?.id},
                
            ]
        }),
        deleteCar: builder.mutation<{id: string}, string>({
            query: (id) => ({
                url: `/cars/${id}`,
                method: 'DELETE'
            }),
            transformResponse: (response: any, meta, arg) => {
                return {id: arg};
            }
        })
    })
});

export const { useGetCarsQuery, useGetCarByIdQuery, useAddCarMutation, useUpdateCarMutation, useDeleteCarMutation } = carApiSlice;

