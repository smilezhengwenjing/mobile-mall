import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    registerFlag:false
})
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_REGISTER:
            return state.set('registerFlag', action.value);
        default:
            return state;
    }
}
export default reducer;