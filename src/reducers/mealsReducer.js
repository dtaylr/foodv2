import * as types from '../types';

const initialState = {
    randomRecipes: [],
    selectedRecipe: {},
    search: '',
    recipeModal: '',
    err: false,
    favorites: [],
    queriedRecipes: [],
    mealsPpg: 5,
    pgNumbers: [],
    currentPage: 1,
    loading: false
}


export default function (state = initialState, {payload, type}){
    switch(type){
        case types.GET_RECIPES:
            return{
                ...state,
                randomRecipes: payload,
            }
        case types.GET_RECIPE:
            return{
            ...state,
            selectedRecipe: payload
        }
        case types.SEARCH_RECIPES:
            return{
                ...state,
                // search: payload,
                queriedRecipes: payload,
                pgNumbers: payload
            }
        case types.SET_RECIPES:
            return{
                ...state,
                loading: false,
            }
        // case types.NEXT_PAGE:
        //     return{
        //         ...state,
        //         currentPage: payload
        //     }
        case types.ADD_FAVORITE:
            return{
                ...state,
                favorites: payload.favedMeals
            }
        case types.GET_FAVORITES:
            return{
                ...state,
                favorites: payload
            }
        case types.SET_LOADING:
            return{
                ...state,
                loading: true
            }
        // case types.SHOW_ALERT:
        //     return{
        //         ...state,
        //         alertModal: payload
        //     }
        case types.RECIPE_MODAL:
            return{
                ...state,
                recipeModal: payload
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