import {combineReducers} from "redux-immutable";

import loginReducer from '../pages/login/store/reducer';
import TodoReducer from '../pages/todo/store/reducer'

const reducer = combineReducers({
    login:loginReducer,
    Todo:TodoReducer
});
export default reducer;