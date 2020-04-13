import React, {Fragment, useEffect} from 'react'
import Meal from '../components/Meal';
import Loading from '../loading.gif';
import {useSelector, useDispatch}from 'react-redux'
import { setMeals} from '../actions/mealActions';

const Filtered = () => {

    const dispatch = useDispatch()

    const spoons = useSelector(state=> state.meals.filtered);
    const loading = useSelector(state=> state.meals.loading);
    const favs  = useSelector(state=> state.meals.favs);

    useEffect(() => {
        dispatch(setMeals())
    }, [dispatch])

    if(loading || spoons === 0){
        return <Loading/>
    }

    return (
            <Fragment>
                <section id='meals'>
                    {!loading && spoons.length === 0 ? (
                    <h1 className=''>No Meals Found</h1>):(spoons.map(spoon=> (
                        <Meal 
                            key={spoon.idMeal} 
                            rando={spoon}
                            favs={favs}/>
                        )))
                }
                </section>
            </Fragment>
      
    )
}

export default Filtered
