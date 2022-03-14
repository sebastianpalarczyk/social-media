import { call, select, take, put, takeEvery } from "redux-saga/effects";
import { selectLogin } from "./loginSlice";
import { sendLoginData } from "./sendLoginData";

function* sendLoginHandler() {
    try {
        const login = select(selectLogin);
        console.log(login)
        yield call(sendLoginData(login));
    } catch (error) {
        yield call(alert, "cos poszlo nie tak");
    }
}

export function* loginSaga() {
    console.log("Saga jest podłączona")
    yield takeEvery("*",sendLoginHandler);
}