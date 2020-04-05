import React, {useEffect, Fragment} from 'react'
import {getFavs} from '../actions/mealActions'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useLocation} from 'react-router-dom'
import {getMeals, nextPage} from '../actions/mealActions';
import Filtered from '../components/Filtered';
import Pagination from '../components/Pagination';
import Meal from '../components/Meal'
import Search from '../components/Search';

const Home = () => {

    const dispatch = useDispatch();

    const mealz = useSelector(state => state.meals.randoms);
    const search = useSelector(state => state.meals.search)
    const filter = useSelector(state => state.meals.filtered)   
    const pgNumbers = useSelector(state => state.meals.pgNumbers)
    const mealsPpg = useSelector(state => state.meals.mealsPpg)
    const currentPage = useSelector(state => state.meals.currentPage)
    const favs = useSelector(state => state.meals.favs)

    const indexPrevMeal = currentPage * mealsPpg; //index of last meal should give 5 sets ppg ex 1 * 5 = 5, 2*5=10 ...
    const indexFirstMeal = indexPrevMeal - mealsPpg; //can get 0 if on 1st pg but should still work? or 1 since 0 based
    const currentMeals = filter.slice(indexFirstMeal, indexPrevMeal) // n(0, 5)

    // const nextPage = () => setPage(pages)

    useEffect(()=>{
        dispatch(getMeals())
    }, [dispatch])

    return (
        <Fragment>
            <div className='search-holder'>
                <Search meals={search}/>
            </div>

            <div>
                {filter.length > 0 ? (<h1 className='randoms-title'>Filtered Meals</h1>):
                    (<h1 className='randoms-title'>Random Meals</h1>)}
            </div>

            <section id='meals'>
                {filter.length > 0 ? (currentMeals.map(spoon=>(
                    <Filtered key={spoon.idMeal} currentMeals={spoon}/>
                    // <Filtered currentMeals={currentMeals}/>
                ))):(mealz.slice(0,5).map(rando => (
                    <Meal key={rando.idMeal} rando={rando} favs={favs} />
                ))
                    )
                }    
            </section>
                <Pagination mealsPpg={mealsPpg} totalMeals={pgNumbers.length} nextPage={nextPage}/>
        </Fragment>
    )
}
        //  {/* <Link to={`/meals/${rando.idMeal}`}>View More</Link>  */} {/*link to PDP */} 

export default Home

