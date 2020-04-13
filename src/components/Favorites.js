import React, {Fragment} from 'react';
import Meal from './Meal'
import { useSelector} from 'react-redux'

const Favorites = () => {

    let favs = useSelector(state => state.meals.favs);

    return (
        <Fragment>
            <h1 className='randoms-title'>Your Favorites</h1>
            <section id='meals'>
                {favs.length > 0 ? (favs.map(spoon=> (
                    <Meal key={spoon.idMeal} 
                        rando={spoon}/>
                    ))):(null)}
            </section>
        </Fragment>
      
    )
}

export default Favorites
