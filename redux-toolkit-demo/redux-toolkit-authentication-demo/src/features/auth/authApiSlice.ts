import { apiSlice } from "../api/apiSlice";

export interface UserCredentialsDTO {
    email: string,
    password: string
};

export interface AccessTokenDTO {
    access_token: string
};

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAccessToken: builder.mutation<AccessTokenDTO, UserCredentialsDTO>({
            query: (userCredentialsDTO) => ({
                url: '/auth/login',
                method: 'POST',
                body: userCredentialsDTO,
            })
        }) 
    })
});

export const { useGetAccessTokenMutation } = authApiSlice;

