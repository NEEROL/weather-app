import { SET_NIGHT } from '../utils/ActionTypes';

const reducer = (state = false, action) => {
    switch (action.type) {
        case SET_NIGHT:
            return action.value;
        default:
            return state;
    }
};

export default reducer;
