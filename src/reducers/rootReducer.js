import {combineReducers} from 'redux';
import mealsReducer from './mealsReducer';
// import searchReducer from './searchReducer';

export default combineReducers({
    meals: mealsReducer,
    // search: searchReducer
})