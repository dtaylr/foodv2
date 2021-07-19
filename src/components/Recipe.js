import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {getRecipe, addToFavorites} from '../actions/recipeActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Meal = ({recipe: spoon, favs}) => {

    let location = useLocation();

    const dispatch = useDispatch()

    const {strArea, strMeal, strMealThumb, strCategory} = spoon
    
    return (
        <div className='meal-container'>
            <h3 className='meal-title'>{strMeal}</h3>
            <div className='imgContainer'>
                <img 
                    className='meal-viz' 
                    src={strMealThumb} 
                    alt={strMeal}
                />
            </div>
            <article className='card-desc'>
                <p className='meal-cat'>Type: {strCategory}</p>
                <p className='meal-area'>Cuisine: {strArea}</p>
            </article>
            <section className='meal-cntrls'>
                <FontAwesomeIcon 
                    onClick={()=> dispatch(addToFavorites(favs, spoon))} 
                    className='addToFavorites'
                    icon={faHeart}
                    size='2x'
                />
                <button className='btn-detail'>
                    <Link 
                        onClick={()=>dispatch(getRecipe(spoon))}
                        to={`/recipe/${spoon.strMeal}`}>Meal View
                    </Link>
                </button>
                <button className='btn-modal'>
                    {/*Modal Here */}
                    {/* <Link data-cy='card-modal-btn'
                        onClick={()=>dispatch(getMeal(spoon))}
                        to={{pathname: `/meals/${spoon.idMeal}`,
                            state: {background: location}}}>Quick View
                    </Link> */}
                </button>
            </section>
        </div>
    )
}  



export default Meal
