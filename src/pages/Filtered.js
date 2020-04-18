import React, {Fragment, useEffect} from 'react'
import Meal from '../components/Meal';
import Loading from '../components/Loading';
import {useSelector, useDispatch}from 'react-redux'
import { setMeals} from '../actions/mealActions';

const Filtered = () => {

    const dispatch = useDispatch()

    const spoons = useSelector(state=> state.meals.filtered);
    const err = useSelector(state=> state.meals.err)
    const loading = useSelector(state=> state.meals.loading);
    const favs  = useSelector(state=> state.meals.favs);

    console.log(err)

    useEffect(() => {
        dispatch(setMeals(spoons))
        // eslint-disable-next-line
    }, [dispatch])

    if(loading || spoons === 0){
        return <Loading/>
    }
    
    return (
            <Fragment>
                <section id='meals'>
                    {loading || !spoons ? (
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
