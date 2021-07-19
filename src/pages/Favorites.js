import React, {Fragment} from 'react';
import Recipe from '../components/Recipe'
import { useSelector} from 'react-redux'

const Favorites = () => {

    let favs = useSelector(state => state.recipes.favorites);

    return (
        <Fragment>
            <h1 className='randoms-title'>Your Favorites</h1>
            <section id='meals'>
                {favs.length > 0 ? (favs.map(recipe=> (
                    <Recipe 
                        key={recipe.idMeal} 
                        recipe={recipe}/>
                    ))):(null)}
            </section>
        </Fragment>
      
    )
}

export default Favorites
