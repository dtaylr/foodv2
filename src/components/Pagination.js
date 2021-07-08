import React, {} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux';

const Pagination = ({totalMeals, mealsPpg, nextPage}) => {

    const dispatch = useDispatch();

    const pages =[]

    // const [pages, setCurrentPages] = useState([])
    
    for(let i = 1; i <= Math.ceil(totalMeals / mealsPpg); i++) {
            pages.push(i);
    }

    //    useEffect(() => {
    //     dispatch(nextPage())
    // }, [dispatch])
    
    return (
        <nav>
            <ul data-class='pages-ul' className='pages'>
                {pages.map(number => (
                    <li key={number} className='pg-num'>
                        <Link to='!#' onClick={()=> dispatch(nextPage(number))} className='pg-link'>
                        {number}
                        </Link>
                    </li>  
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
