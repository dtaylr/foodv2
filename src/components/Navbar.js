import React, {useEffect} from 'react'
import {getFavs} from '../actions/mealActions';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux';

const Navbar = () => {

    const dispatch = useDispatch()
   

    let yums = JSON.parse(localStorage.getItem('favedMeals'));

    // const favs = useSelector(state=> state.meals.favs)    

    useEffect(() => {
        dispatch(getFavs())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])
    
    return (
        <nav id='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/meals'>Meals</Link>
            {yums && yums.length ? ( <Link to='/favorites'>
                        <button>Your Favorites</button>
                </Link>):null
                }
        </nav>
    )
}

export default Navbar
    