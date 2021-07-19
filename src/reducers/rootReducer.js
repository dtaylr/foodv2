import {combineReducers} from 'redux';
import mealsReducer from './mealsReducer';
// import searchReducer from './searchReducer';

export default combineReducers({
    recipes: mealsReducer,
    // search: searchReducer
})