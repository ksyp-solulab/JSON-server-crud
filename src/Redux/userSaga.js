import * as types from './actionType'
import {take, takeEvery, takeLatest, put, all, delay, fork, call } from "redux-saga/effects";
import { loadUsersSuccess,loadUsersError, createUsersSuccess, createUsersError, deleteUsersSuccess, deleteUsersError, updateUsersSuccess,updateUsersError } from "./action"
import {deleteUserApi, loadUsersApi, postUserApi, updateUserApi} from "./api"

function* onLoadUsersStartAsync(){
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
function* onCreateUsersStartAsync({payload}){
    const responce = yield call(postUserApi,payload);
    try{
        if(responce.status === 200){
            yield delay(500);
            yield put(createUsersSuccess(responce.data));
        }
    }catch(error){
        yield put(createUsersError(error.responce.data));
    }
}
function* onDeleteStartAsync(userId){
    const responce = yield call(deleteUserApi,userId);
    try{
        if(responce.status === 200){
            yield put(deleteUsersSuccess(userId));
        }
    }catch(error){
        yield put(deleteUsersError(responce.data));
    }
}
function* onUpdateUsersStartAsync({payload : {id,formValue}}){
    try{
        const responce = yield call(updateUserApi,id,formValue);
        if(responce.status === 200){
            yield put(updateUsersSuccess())
        }
    }catch(error){
        yield put(updateUsersError(error.responce.data))
    }
}
function* onDeleteUser(){
    while(true){
        const {payload: userId} = yield take(types.DELETE_USER_START);
    yield call(onDeleteStartAsync, userId);
    }
}
 function* onLoadUsers(){
    yield takeLatest(types.LOAD_USER_START, onLoadUsersStartAsync)
}

 function* onCreateUser(){
    yield takeLatest(types.CREATE_USER_START, onCreateUsersStartAsync)
}

function* onUpdateUser(){
    yield takeLatest(types.UPDATE_USER_START, onUpdateUsersStartAsync)
}
const userSagas = [
    fork(onLoadUsers),
    fork(onCreateUser),
    fork(onDeleteUser),
    fork(onUpdateUser)
];

export default function* rootSaga(){
    yield all([...userSagas])
}