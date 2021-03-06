import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        login: {},
    },
    reducers: {
        addLogin: (state, { payload: user }) => {
            state.login = user;
        },
        sendLogin: () => {},
        setLogin:(state, {payload: login}) => {
            state.login = login;
        }
    },
});

const selectLoginState = state => state.login;

export const { addLogin, sendLogin, setLogin } = loginSlice.actions;
export const selectLogin = state => selectLoginState(state).login;
export default loginSlice.reducer;