import { all } from "redux-saga/effects";
import { postsSaga } from "../App/features/Dashboard/Posts/postsSaga";
import { loginSaga } from "../App/features/LoginPage/loginSaga";
import { postSaga } from "../App/features/Dashboard/Posts/AddNewPost/postSaga";

export default function* rootSaga() {
    yield all([
        postsSaga(),
        loginSaga(),
        postSaga(),
    ])
}