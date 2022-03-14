import { all } from "redux-saga/effects";
import { postsSaga } from "./features/HomePage/Posts/postsSaga";
import { loginSaga } from "./features/LoginPage/loginSaga";

export default function* rootSaga() {
    yield all([
        postsSaga(),
        loginSaga(),
    ])
}