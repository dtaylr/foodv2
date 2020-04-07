import * as types from '../types';

const initialState ={
    randoms: [],
    mealId: {},
    search: '',
    error: {},
    favs: [],
    filtered: [],
    mealsPpg: 5,
    pgNumbers: [],
    currentPage: 1,
    loading: false
}


export default function (state = initialState, {payload, type}){
    switch(type){
        case types.GET_MEALS:
            return{
                ...state,
                randoms: payload,
            }
        case types.GET_MEAL:
            return{
            ...state,
            mealId: payload
        }
        case types.SEARCH_MEAL:
            return{
                ...state,
                // loading: true,
                search: payload,
                filtered: payload,
                pgNumbers: payload
            }
        case types.NEXT_PAGE:
            return{
                ...state,
                currentPage: payload
            }
        case types.FAVED:
            return{
                ...state,
                favs: payload.favedMeals
            }
        case types.GET_FAVS:
            return{
                ...state,
                favs: payload
            }
        case types.SHOW_ERROR:
            return{
                ...state,
                filtered: payload
            }
        
            default:
                return state;
    }
}