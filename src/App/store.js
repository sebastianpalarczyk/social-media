import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../App/features/Dashboard/Posts/postsSlice';
import loginReducer from '../App/features/LoginPage/loginSlice';
import tokenReducer from './tokenSlice';
import postReducer from '../App/features/Dashboard/Posts/AddNewPost/postSlice';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        posts: postsReducer,
        login: loginReducer,
        token: tokenReducer,
        post: postReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;