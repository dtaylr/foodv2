import React, {useEffect, Fragment} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {getMeals, nextPage} from '../actions/mealActions';
import Pagination from '../components/Pagination';
import Meal from '../components/Meal'

const Home = () => {

    const dispatch = useDispatch();

    const mealz = useSelector(state => state.meals.randoms);
    const pgNumbers = useSelector(state => state.meals.pgNumbers)
    const mealsPpg = useSelector(state => state.meals.mealsPpg)
    // const currentPage = useSelector(state => state.meals.currentPage)
    const favs = useSelector(state => state.meals.favs)

    // const indexPrevMeal = currentPage * mealsPpg; //index of last meal should give 5 sets ppg ex 1 * 5 = 5, 2*5=10 ...
    // const indexFirstMeal = indexPrevMeal - mealsPpg; //can get 0 if on 1st pg but should still work? or 1 since 0 based
    // const currentMeals = filter.slice(indexFirstMeal, indexPrevMeal) // n(0, 5)
    // const nextPage = () => setPage(pages)

    useEffect(()=>{
        dispatch(getMeals())
    }, [dispatch])

    return (
        <Fragment>
            {/* <div className='search-holder'>
                <Search mealz={search}/>
            </div> */}

            <h1 className='randoms-title'>Random Meals</h1>
            <section id='meals'>
                {mealz.slice(0,5).map(rando=> (
                    <Meal 
                        key={rando.idMeal} 
                        rando={rando} 
                        favs={favs}
                    />))
                }
            </section>
                {pgNumbers ? (
                    <Pagination 
                        mealsPpg={mealsPpg} 
                        totalMeals={pgNumbers.length} 
                        nextPage={nextPage}/>):null}
                {/* <Pagination mealsPpg={mealsPpg} totalMeals={pgNumbers.length} nextPage={nextPage}/> */}
        </Fragment>
    )
}
export default Home

