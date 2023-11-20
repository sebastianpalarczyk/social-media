import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchFileStart, fetchFileSuccess, fetchFileFailure } from './fileSlice';
import { getFile } from './getFile';

function* handleFetchFile() {
    try {
        console.log("handleFetch")
        yield put(fetchFileStart());

        // Wywołanie funkcji pobierającej plik
        const fileData = yield call(getFile);
        console.log("dane " + fileData)

        yield put(fetchFileSuccess(fileData));
    } catch (error) {
        yield put(fetchFileFailure(error.message));
    }
}

export function* fileSaga() {
    yield takeLatest('files/fetchFiles', handleFetchFile);
}