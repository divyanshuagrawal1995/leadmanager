import itemReducer from './itemReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import{combineReducers} from 'redux'
const rootReducer=combineReducers({
    item:itemReducer,
    auth:authReducer,
    error:errorReducer

})
export default rootReducer;