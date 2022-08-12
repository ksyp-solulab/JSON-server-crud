import {combineReducers} from 'redux';
import usersReduser from './reducer';

const rootReducer = combineReducers({
    data:usersReduser
})

export default rootReducer;