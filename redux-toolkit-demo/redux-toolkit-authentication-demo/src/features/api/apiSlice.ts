import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../app/store';
// import type {
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
// } from '@reduxjs/toolkit/query';


// Redux example with reauth
// https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#automatic-re-authorization-by-extending-fetchbasequery

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000', 
    credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
            const state = getState() as RootState;
            const token = state.auth.token;
            console.log('Preparing headers...');
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers;
        },
    });
// TODO: Need to work on this code using auth refech technique
/*
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        console.log('Authentication error caught in baseQueryWithReauth');

        const refreshResult = await baseQuery(
            {
                url: '/auth/login', 
                method: 'POST', 
                body: {email: "dhruv@email.com", password: 'dhruv'}
            }, 
            api, 
            extraOptions
        );

        if (refreshResult.data) {
            const newToken = refreshResult.data as AccessTokenDTO;
            console.log('access_token', newToken.access_token);
            // Below line is the missing link to the whole solution
            //api.dispatch(updateToken(newToken.access_token));
            result = await baseQuery(args, api, extraOptions);
        } else {
            console.log('unable to fetch refresh token');
        }
    }
    return result;
}
*/

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    tagTypes: ['Car', 'Bike'],
    endpoints: builder =>({})
});

