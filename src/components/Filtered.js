import React, {Fragment} from 'react'
import Meal from './Meal';

const Filtered = ({currentMeals: spoon, favs}) => {
    return (
            <Fragment>
                <Meal key={spoon.idMeal} 
                    rando={spoon}
                    favs={favs}/>
            </Fragment>
      
    )
}

export default Filtered
