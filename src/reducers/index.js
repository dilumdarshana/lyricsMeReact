import { combineReducers } from "redux";
import mathReducer from './math';
import userReducer from './user';
import getAlbumsReducer from './admin';

const mainReducer = combineReducers({
    mathReducer,
    userReducer,
    getAlbumsReducer
});

export default mainReducer;