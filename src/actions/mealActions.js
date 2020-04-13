import * as types from '../types'
import api from '../utils/api'

export const getFavs = favs => dispatch =>{
    let meals = favs
    if(localStorage.getItem('favedMeals')){
        meals = JSON.parse(localStorage.getItem('favedMeals'));
    }else{
        meals = JSON.parse(localStorage.getItem('favedMeals'))
        return meals
    }
    dispatch({type: types.GET_FAVS, payload: meals})
}

export const getMeals = () => dispatch =>{
    fetch(api)
    .then(res => res.json())
    .then(data =>{
        dispatch({type:types.GET_MEALS, payload: data.meals})})
    .catch(error=> console.log('No Meals' + error))
}

export const setLoading =()=>{
    return{
        type: types.SET_LOADING
    }
}

export const searchIt = text => async dispatch =>{
    try{
        setLoading()
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
        const data = await res.json()
            dispatch({type:types.SEARCH_MEAL, payload: data.meals})
    }catch (error){
        dispatch({type:types.SHOW_ERROR, payload: error})  
    } 
}

export const setMeals = spoons => async dispatch =>{
    return dispatch({type: types.SET_MEALS, payload: spoons})
}

export const nextPage = number => dispatch =>{
    return dispatch({type:types.NEXT_PAGE, payload: number});
}

export const faved = (favs, spoon) => dispatch =>{
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
    return dispatch ({type:types.FAVED, payload:{
        favedMeals: favedMeals
    } })
}

export const getMeal = idMeal => dispatch => {
    return dispatch({type: types.GET_MEAL, payload: idMeal})
}