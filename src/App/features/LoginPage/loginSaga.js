import { call, select, takeEvery, put } from "redux-saga/effects";
import { selectLogin, addLogin } from "./loginSlice";
import { sendLoginData } from "./sendLoginData";
import { saveLoginDataInLocalStorage } from "../../loginDataLocalStorage";
import { setToken } from "../../tokenSlice";

function* sendLoginHandler() {
    try {
        const login = yield select(selectLogin);
        const token = yield call(sendLoginData, login);
        yield call(saveLoginDataInLocalStorage, token);
        yield put(setToken(token));
    } catch (error) {
        yield call(alert, "Brak połączenia z internetem lub serwer nie odpowiada!");
    }
}

export function* loginSaga() {
    yield takeEvery(addLogin.type, sendLoginHandler);
}