import * as types from './actionType'
import {take, takeEvery, takeLatest, put, all, delay, fork, call } from "redux-saga/effects";
import { loadUsersSuccess,loadUsersError, createUsersSuccess, createUsersError } from "./action"
import {loadUsersApi, postUserApi} from "./api"

export function* onLoadUsersStartAsync(){
    const responce = yield call(loadUsersApi);
    try{
        if(responce.status === 200){
            yield delay(500);
            yield put(loadUsersSuccess(responce.data));
        }
    }catch(error){
        yield put(loadUsersError(responce.data));
    }
}
export function* onCreateUsersStartAsync({payload}){
    const responce = yield call(postUserApi,payload);
    try{
        if(responce.status === 200){
            yield delay(500);
            yield put(createUsersSuccess(responce.data));
        }
    }catch(error){
        yield put(createUsersError(responce.data));
    }
}
export function* onLoadUsers(){
    yield takeLatest(types.LOAD_USER_START, onLoadUsersStartAsync)
}

export function* onCreateUser(){
    yield takeLatest(types.CREATE_USER_START, onCreateUsersStartAsync)
}
const userSagas = [
    fork(onLoadUsers),
    fork(onCreateUser)
];

export default function* rootSaga(){
    yield all([...userSagas])
}