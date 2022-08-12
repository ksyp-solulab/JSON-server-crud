import * as types from "./actionType";
const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USER_START:
    case types.CREATE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case types.LOAD_USER_ERROR:
    case types.CREATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReduser;
