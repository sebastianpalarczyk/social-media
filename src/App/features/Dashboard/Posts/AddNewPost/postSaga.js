import { call, select, takeEvery, put } from "redux-saga/effects";
import { addNewPost } from "./addNewPost";
import { selectPost, setPost, addPost} from "./postSlice";


function* addNewPostHandler() {
    try {
        const post = yield select(selectPost);
        yield call(addNewPost, post);
        yield put(setPost(post));
    } catch (error) {
        yield call(alert, error);
    }
}

export function* postSaga() {
    console.log("saga jest podlaczona")
    yield takeEvery(addPost.type, addNewPostHandler);
}