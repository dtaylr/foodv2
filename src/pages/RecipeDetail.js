import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {closeModal} from '../actions/recipeActions';
// import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const RecipeDetail = () => {

    const recipe = useSelector(state => state.recipes.selectedRecipe)
    const open = useSelector(state => state.recipes.showModal)
    const dispatch = useDispatch()

    const {strMeal, strArea, strCategory, strMealThumb, strInstructions} = recipe

    const formatRecipe = () => {
        
        const ingredients = Object.entries(recipe).filter(([k, v]) => {
         return k.startsWith('strIngredient')
        });

        const measurements = Object.entries(recipe).filter(([k, v]) => {
            return k.startsWith('strMeasure')
        })

        const formattedRecipe = measurements.map((e, i) => {
            return [e[1], ingredients[i][1]]
        }).filter( key => key.indexOf("") < 0 || null )

        return formattedRecipe;
       }

       const listIngredients = (listedIngredients = []) => {
           const ingredients = listedIngredients.map(( ingredient, i) => {
            return <li key={`ingredient${i}`}>{`${ingredient[0]} ${ingredient[1]}`}</li>

           })

           return <ul>{ingredients}</ul>
       }

       const listDirections = () => <p>{strInstructions}</p>

    // let back = e => {
    //     e.stopPropagation();
    //     history.goBack();
    //   };  

    return (
        <div className='detail-container'>
            <div>
                {open ? (<FontAwesomeIcon
                    onClick={()=> dispatch(closeModal)}
                    icon={faTimes}
                    size='2x'
                    className='modal-close-btn'/>) : null}
            </div>
        <h1 className='detail-title'>{strMeal}</h1>
            <section className='detail-head'>
                <div className='top-section'>
                    <div className='img-container'>
                        <img 
                            className='detailPhoto' 
                            alt={`pic of ${strMeal}`} 
                            src={strMealThumb}
                        />
                    </div>
                    <article className='detail-desc'>
                        <p>Type: {strCategory}</p>
                        <p>Nationality: {strArea}</p>
                    </article>
                </div>
            <section className='ingredients'>
                <h4>Ingredients</h4>
                    <ul className='recipe-list'>
                        {listIngredients(formatRecipe())}
                    </ul>
            </section>
            </section>  
                <section className='instruct-container'>
                    <h4 className='instruct-title'>Recipe</h4>
                    {listDirections()}
                </section>  
            </div>
    )
}

export default RecipeDetail
