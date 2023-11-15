// import { takeEvery, call, put, select } from "redux-saga/effects";
// import { getExamplePosts } from "./getExamplePosts";
// import { setPosts, fetchExamplePosts } from "./postsSlice";

// function* fetchExamplePostsHandler() {
//     try {
//         const examplePosts = yield call(getExamplePosts);
//         yield put(setPosts(examplePosts));

//     } catch (error) {
//         yield call(alert, error);
//     }
// }

// export function* postsSaga() {
//     yield takeEvery(fetchExamplePosts.type, fetchExamplePostsHandler);
// }

import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExamplePostsAsync, setPosts } from "./postsSlice";

function* fetchExamplePostsHandler() {
  try {
    const examplePosts = yield call(fetchExamplePostsAsync);
    yield put(setPosts(examplePosts));
  } catch (error) {
    yield call(alert, error);
  }
}

export function* postsSaga() {
  yield takeEvery(fetchExamplePostsAsync, fetchExamplePostsHandler);
}