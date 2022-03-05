import {all} from "redux-saga/effects";
import { postsSaga } from "./features/HomePage/Posts/postsSaga";

export default function* rootSaga() {
    yield all([
        postsSaga(),
    ])
}