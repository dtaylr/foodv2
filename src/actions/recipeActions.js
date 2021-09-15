import * as types from '../types'
import api from '../utils/api'
import axios from 'axios'

export const getFavorites = favs => dispatch =>{
    let meals = favs
    if(localStorage.getItem('favedMeals')){
        meals = JSON.parse(localStorage.getItem('favedMeals'));
    }else{
        meals = 'No meals could be found'
        return meals
    }
   return dispatch({type: types.GET_FAVORITES, payload: meals})
}

export const getRecipe = idMeal => dispatch => {
    return dispatch({type: types.GET_RECIPE, payload: idMeal})
}

export const getRecipes = () => dispatch =>{
    try {
        axios.get(api.random)
        .then((res) => res.data.meals)
        .then((data) => {
            dispatch({type: types.GET_RECIPES, payload: data })        
        })
    } catch (error) {
        console.log(error)
        alert(error)
    }
    // fetch(api)
    // .then(res => res.json())
    // .then(data =>{
    //      dispatch({type:types.GET_MEALS, payload: data.meals})})
    // .catch(error=> console.log('No Meals' + error))
}

export const toggleModal = idMeal => dispatch => {
    return dispatch ({type: types.TOGGLE_MODAL, payload: idMeal})}

export const closeModal = () => dispatch => {
    return dispatch({type: types.CLOSE_MODAL, payload: false})
}

export const setLoading = () => dispatch => {
    return dispatch({type: types.SET_LOADING})
}

export const searchIt = text => async dispatch =>{  
    if(!text){
        alert('Search field empty!')
    }else try{
        setLoading()
        axios.get(`${api.search}${text}`)
        .then((res) => res.data)
        .then((data) =>  dispatch({type:types.SEARCH_RECIPES, payload: data.meals})
        )
        // const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
        // const data = await res.json()
            // dispatch({type:types.SEARCH_MEAL, payload: data.meals})
    }catch (err){
        console.log('meal error found')
        alert('No meals found for your search!')
        dispatch({type:types.SEARCH_ERROR, payload: err})  
    } 
}

export const setRecipes = (spoons, err) => async dispatch =>{
    return dispatch({type: types.SET_RECIPES, payload: spoons})
}

// export const nextPage = number => dispatch =>{
//     return dispatch({type:types.NEXT_PAGE, payload: number});
// }

export const addToFavorites = (favs, spoon) => dispatch =>{
    const favedMeals = favs.slice();
    
    let liked = false
    favedMeals.forEach(meal => {
        if(meal.idMeal === spoon.idMeal){
            liked = true;
        }
    });

    if(!liked){
        favedMeals.push({...spoon, favs})
    }

    localStorage.setItem('favedMeals', JSON.stringify(favedMeals));
    alert(`Stored ${spoon.strMeal} to Favs`);
    return dispatch ({type:types.ADD_FAVORITE, payload:{
        favedMeals: favedMeals
    } })
}

export const removeFavorite = favs => dispatch => {
    // let favs = recipes
     favs.filter((recipe) => recipe.idMeal !== favs.idMeal)
     return dispatch ({type: types.REMOVE_FAVORITE, payload: favs })
}

// let meals = favs
// if(localStorage.getItem('favedMeals') && length > 0){
//     meals = JSON.parse(localStorage.getItem('favedMeals'));
// }else{
//     //CHANGE
//     meals = 'No meals could be found'
//     return meals
// }
// return dispatch({type: types.GET_FAVORITES, payload: meals})