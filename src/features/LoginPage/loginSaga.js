import { call, select, takeEvery} from "redux-saga/effects";
import { selectLogin } from "./loginSlice";
import { sendLoginData } from "./sendLoginData";

function* sendLoginHandler() {
    try {
        const login = yield select(selectLogin);
        yield call(sendLoginData, login);
    } catch (error) {
        yield call(alert, error);
    }
}

export function* loginSaga() {
    yield takeEvery("*", sendLoginHandler);
}