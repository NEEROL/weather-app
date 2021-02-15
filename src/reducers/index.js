import { combineReducers } from 'redux';
import city from '../reducers/city';
import night from '../reducers/night';

export default combineReducers({
    city,
    night,
});
