import React from 'react'
import { useSelector } from 'react-redux'


const MealModal = () => {

    const meal = useSelector(state => state.meals.mealId)

    // const mealId = useParams()
    // console.log(mealId)

    const { strMeal,
        // strDrinkAlternate,
        // strCategory,strArea,
        strInstructions,
        // strMealThumb,
        // strYoutube,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strMeasure10,
        // strMeasure11,
        // strMeasure12,
        // strMeasure13,
        // strMeasure14,
        // strMeasure15,
        // strMeasure16,
        // strMeasure17,
        // strMeasure18,
        // strMeasure19,
        // strMeasure20
    } = meal

    return (
        <div className='modal-container'>
        {/* <Fragment> */}
            <h1 className='modal-title'>{strMeal}</h1>
                <section className='detail-head'>
                <section className='ingredients'>
                    <h4>Ingredients</h4>
                        <ul className='recipe-list'>
                            <li>{strMeasure1} {strIngredient1}</li>
                            <li>{strMeasure2} {strIngredient2}</li>
                            <li>{strMeasure3} {strIngredient3}</li>
                            <li>{strMeasure4} {strIngredient4}</li>
                            <li>{strMeasure5} {strIngredient5}</li>
                            <li>{strMeasure6} {strIngredient6}</li>
                            <li>{strMeasure7} {strIngredient7}</li>
                            <li>{strMeasure8} {strIngredient8}</li>
                            <li>{strMeasure9} {strIngredient9}</li>
                            <li>{strMeasure10} {strIngredient10}</li>
                            {/* <li>{strMeasure11} {strIngredient11}</li>
                            <li>{strMeasure12} {strIngredient12}</li>
                            <li>{strMeasure13} {strIngredient13}</li>
                            <li>{strMeasure14} {strIngredient14}</li>
                            <li>{strMeasure15} {strIngredient15}</li>
                            <li>{strMeasure16} {strIngredient16}</li>
                            <li>{strMeasure17} {strIngredient17}</li>
                            <li>{strMeasure18} {strIngredient18}</li>
                            <li>{strMeasure19} {strIngredient19}</li>
                            <li>{strMeasure20} {strIngredient20}</li> */}
                        </ul>
                </section>
                </section>  
                    <section className='instruct-container'>
                        <h4 className='instruct-title'>Recipe</h4>
                        <p className='instructions'>{strInstructions}</p>
                    </section>  
                        {/* </Fragment> */}
                        {/* <Link
                            onClick={()=>dispatch(getMeal(spoon))}
                                to={`/meals/${spoon.idMeal}`}>Meal View
                    </Link> */}
                </div>


               
                 

    )
}

export default MealModal
