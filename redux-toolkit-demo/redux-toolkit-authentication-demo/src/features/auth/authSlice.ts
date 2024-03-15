import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authApiSlice } from "./authApiSlice";

export interface AuthState {
    token?: string
}

const authInitialState: AuthState = {}

const authSlice = createSlice({
    name: 'authSlice',
    initialState: authInitialState,
    reducers: {
        updateToken: (state: AuthState, refreshToken: PayloadAction<string>) => {
            console.log('updating refresh token....');
            state.token = refreshToken.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApiSlice.endpoints.getAccessToken.matchFulfilled, (state, action) => {
            state.token = action.payload.access_token;
        })
    }
});

export const authReducer = authSlice.reducer;
export const { updateToken } = authSlice.actions;