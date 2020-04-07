import React, {useEffect} from 'react'
import {getFavs} from '../actions/mealActions';
import {useSelector} from'react-redux';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux';

const Navbar = () => {

    const dispatch = useDispatch()

    const favs = useSelector(state=> state.meals.favs)    

    useEffect(() => {
        dispatch(getFavs(favs))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])
    
    return (
        <nav id='navbar'>
            <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/meals'>Meals</Link>
                {favs && favs.length ? 
                    (<Link to='/favorites'>
                        Favorites
                    </Link>):null
                }
            </div>
        </nav>
    )
}

export default Navbar
    