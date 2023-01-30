import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

interface CurrentUser {
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

interface UserState {
    currentUser: CurrentUser | null;
    isFetching: boolean;
    error: boolean;
}

const initialState: UserState = {
    currentUser: null,
    isFetching: false,
    error: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signupStart: (state) => {
            state.isFetching = true;
        },
        signupSuccess: (state, action: PayloadAction<CurrentUser>) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        signupFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        signinStart: (state) => {
            state.isFetching = true;
        },
        signinSuccess: (state, action: PayloadAction<CurrentUser>) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        signinFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const { signupStart, signupSuccess, signupFailure, signinStart, signinSuccess, signinFailure } =
    userSlice.actions;
export default userSlice.reducer;
