import * as types from './actionType'

export const loadUsersStart = () => ({
    type: types.LOAD_USER_START,
})

export const loadUsersSuccess = (users) => ({
    type: types.LOAD_USER_SUCCESS,
    payload: users,
})

export const loadUsersError = (error) => ({
    type: types.LOAD_USER_ERROR,
    payload: error,
})

export const createUsersStart = (user) => ({
    type: types.CREATE_USER_START,
    payload: user,
})

export const createUsersSuccess = () => ({
    type: types.CREATE_USER_SUCCESS,
    
})

export const createUsersError = (error) => ({
    type: types.CREATE_USER_ERROR,
    payload: error,
})