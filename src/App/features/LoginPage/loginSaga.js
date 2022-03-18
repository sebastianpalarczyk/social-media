import { call, select, takeEvery } from "redux-saga/effects";
import { selectLogin } from "./loginSlice";
import { sendLoginData } from "./sendLoginData";
import { saveLoginDataInLocalStorage } from "../../loginDataLocalStorage";

function* sendLoginHandler() {
    try {
        const login = yield select(selectLogin);
        const token = yield call(sendLoginData, login);
        yield call(saveLoginDataInLocalStorage, token);
    } catch (error) {
        yield call(alert, "Brak połączenia z internetem lub serwer nie odpowiada!");
    }
}

export function* loginSaga() {
    yield takeEvery("*", sendLoginHandler);
}