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
   return dispatch({type: types.GET_FAVS, payload: meals})
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
    if(!text){
        alert('Search field empty!')
    }else try{
        setLoading()
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
        const data = await res.json()
            dispatch({type:types.SEARCH_MEAL, payload: data.meals})
    }catch (err){
        console.log('meal error found')
        alert('No meals found for your search!')
        dispatch({type:types.SEARCH_ERROR, payload: err})  
    } 
}

export const showAlert = text => dispatch =>{
    console.log('goin..')
     let text = "Please enter a search term"
     console.log(text)
    dispatch({type: types.SHOW_ALERT, payload: text})
}

export const setMeals = (spoons, err) => async dispatch =>{
    // if (err)
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