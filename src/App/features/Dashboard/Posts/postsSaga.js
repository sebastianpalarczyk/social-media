import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } from './postsSlice';
import { getPosts } from './getExamplePosts';

function* fetchPostsAsync() {
  try {
    yield put(fetchPostsStart());
    const posts = yield call(getPosts);
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* postsSaga() {
  yield takeLatest('posts/fetchPosts', fetchPostsAsync);
}