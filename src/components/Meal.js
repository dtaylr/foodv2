import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import PropTypes from 'prop-types'
import {getMeal, faved} from '../actions/mealActions';
import {TiHeartOutline} from 'react-icons/ti';
import { useDispatch } from 'react-redux'

const Meal = ({rando: spoon, favs}) => {

    let location = useLocation();

    const dispatch = useDispatch()
    

    return (
        <div className='meal-container'>
            <h3 className='meal-title'>{spoon.strMeal}</h3>
            <div className='imgContainer'>
                <img className='meal-viz' src={spoon.strMealThumb} alt={spoon.strMeal}/>
            </div>
            <article className='meal-desc'>
                <p className='meal-cat'>Type: {spoon.strCategory}</p>
                <p className='meal-area'>Cuisine: {spoon.strArea}</p>
            </article>
            <section className='meal-cntrls'>
                <i onClick={()=> dispatch(faved(favs, spoon))} className='faved'><TiHeartOutline/></i>
                <button className='btn-detail'>
                    <Link
                        onClick={()=>dispatch(getMeal(spoon))}
                        to={`/meals/${spoon.idMeal}`}>Meal View
                    </Link>
                </button>
                <button className='btn-modal'>
                    <Link  
                        onClick={()=>dispatch(getMeal(spoon))}
                        to={{pathname: `/meals/${spoon.idMeal}`,
                            state: {background: location}}}>Quick View
                    </Link>
                </button>
            </section>
        </div>
    )
}  

Meal.propTypes = {

}

export default Meal
