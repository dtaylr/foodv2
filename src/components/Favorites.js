import React, {useEffect} from 'react';
import {getMeal} from '../actions/mealActions'
import { useSelector, useDispatch } from 'react-redux'

const Favorites = () => {

    let favs = useSelector(state=> state.meals.favs)

    const dispatch = useDispatch()
    console.log(favs)

    return (
       <div>
           {favs.length > 0 ? (favs.map(lilFav=> (
               <div key={lilFav.idMeal}>
                    <h3 className='fav-title'>{lilFav.strMeal}</h3>
                    <div className='favImg-container'>
                        <img className='fav' src={lilFav.strMealThumb} alt={`${lilFav.strMeal}`}/>
                   </div>
                   <button onClick={()=> dispatch(getMeal(lilFav))}>View Meal</button>
               </div>
           ))):(null)}
       </div>
       
    )
}

export default Favorites
