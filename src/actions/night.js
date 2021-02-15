import { SET_NIGHT } from '../utils/ActionTypes';

const setNight = (night) => ({
    type: SET_NIGHT,
    value: night,
});

export { setNight };
