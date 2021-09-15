import React, {Fragment, useEffect} from 'react'
import RecipeCard from '../components/RecipeCard';
import Loading from '../components/Loading';
import {useSelector, useDispatch}from 'react-redux'
import { setRecipes} from '../actions/recipeActions';

const Filtered = () => {

    const dispatch = useDispatch()

    const queriedRecipes = useSelector(state=> state.recipes.queriedRecipes);
    const loading = useSelector(state=> state.recipes.loading);
    const favs = useSelector(state=> state.recipes.favorites);


    useEffect(() => {
        dispatch(setRecipes(queriedRecipes))
        // eslint-disable-next-line
    }, [dispatch])

    if(loading || queriedRecipes === 0){
        return <Loading/>
    }
    
    return (
            <Fragment>
                <section id='meals'>
                    {loading || !queriedRecipes ? (
                    <h1 className=''>No Meals Found</h1>):(queriedRecipes.map(recipe=> (
                        <RecipeCard 
                            key={recipe.idMeal} 
                            recipe={recipe}
                            favs={favs}/>
                        )))
                }
                </section>
            </Fragment>
      
    )
}

export default Filtered
