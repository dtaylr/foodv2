import * as types from '../types';

const initialState = {
    randoms: [],
    mealId: {},
    search: '',
    alertModal: '',
    mealModal: '',
    err: false,
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
                // search: payload,
                filtered: payload,
                pgNumbers: payload
            }
        case types.SET_MEALS:
            return{
                ...state,
                loading: false,
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
        case types.SET_LOADING:
            return{
                ...state,
                loading: true
            }
        case types.SHOW_ALERT:
            return{
                ...state,
                alertModal: payload
            }
        case types.MEAL_MODAL:
            return{
                ...state,
                mealModal: payload
            }
        case types.BLANK_SEARCH:
            return{
                ...state
            }
        case types.SEARCH_ERROR:
            return{
                ...state,
                err: true
            }
            default:
                return state;
    }
}