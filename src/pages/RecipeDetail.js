import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { TiArrowLeftThick } from 'react-icons/ti'

const RecipeDetail = () => {

    let history = useHistory()
    const {state} = useLocation()

    const recipe = useSelector(state => state.recipes.selectedRecipe)

    // const mealId = useParams()
    // console.log(mealId)

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

    let back = e => {
        e.stopPropagation();
        history.goBack();
      };  

    return (
        <div className='detail-container'>
            <div>
                <FontAwesomeIcon
                    onClick={back}
                    icon={faArrowLeft}
                    size='2x'
                /> 
                <p>Back</p>
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
