import { SET_CITY } from '../utils/ActionTypes';

const reducer = (state = 'Warszawa, PL', action) => {
    switch (action.type) {
        case SET_CITY:
            return action.value;
        default:
            return state;
    }
};

export default reducer;
