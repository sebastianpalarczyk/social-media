import { createSlice } from "@reduxjs/toolkit";
import { getLoginDataInLocalStorage } from "./loginDataLocalStorage";

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        token: getLoginDataInLocalStorage(),
    },
    reducers: {
        setToken: (state, { payload: token }) => {
            state.token = token;
        },
    },
});

export const { setToken } = tokenSlice.actions;

const selectTokenState = state => state.token;

export const selectToken = state => selectTokenState(state).token;
export default tokenSlice.reducer;