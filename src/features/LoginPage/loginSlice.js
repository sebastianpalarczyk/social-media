import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        login: {}
    },
    reducers: {
        addLogin: (state, { payload: user}) => {
            state.login = user;
        },
    },
});

export const { addLogin } = loginSlice.actions;
export const selectLogin = state => state.login;



export default loginSlice.reducer;