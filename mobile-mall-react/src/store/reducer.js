// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from '../pages/login/store';
//生成immutable类型的数据内容
const reducer = combineReducers({
    login:loginReducer
})
export default reducer;