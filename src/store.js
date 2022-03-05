import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/HomePage/Posts/postsSlice';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;