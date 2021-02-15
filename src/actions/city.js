import { SET_CITY } from '../utils/ActionTypes';

const setCity = (name) => ({
    type: SET_CITY,
    value: name,
});

export { setCity };
