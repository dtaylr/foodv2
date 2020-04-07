import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {getMeal, faved} from '../actions/mealActions';
import {TiHeartOutline} from 'react-icons/ti';
import ModalWrapper from './ModalWrapper'
import { useDispatch } from 'react-redux'

const Meal = ({rando: spoon, favs}) => {

    // let location = useLocation();

    const dispatch = useDispatch()
    
    const {strMeal, idMeal, strCategory, strArea, strMealThumb} = spoon

    const [open,setOpen] = useState(false)
    const openModal = () => {          
    setOpen(true)
    }

    const onCloseModal = () =>{
    setOpen(false)
    }

    return (
        <div className='meal-container'>
            <h3 className='meal-title'>{strMeal}</h3>
            <div className='imgContainer'>
                <img className='meal-viz' src={strMealThumb} alt={strMeal}/>
            </div>
            <article className='meal-desc'>
                <p className='meal-cat'>Type: {strCategory}</p>
                <p className='meal-area'>Cuisine: {strArea}</p>
            </article>
            <section className='meal-cntrls'>
                <i onClick={()=> dispatch(faved(favs, spoon))} className='faved'><TiHeartOutline/></i>
                <button className='btn-detail' onClick={()=>dispatch(getMeal(spoon))}>
                    {/* <Link to={{pathname: `/meals/${idMeal}`, state: {background: location}}}>View More</Link>  */}
                    <Link to={`/meals/${idMeal}`}>View More</Link>  {/*link to PDP */} 
                </button>
                <button onClick={openModal} className='modal-btn'>Quick View</button>
                </section>
            <ModalWrapper 
                idMeal={idMeal}
                open={open} 
                rando={spoon}
                name={strMeal} 
                category={strCategory} 
                area={strArea}
                foto={strMealThumb}
                close={onCloseModal}/>
        </div>
    )
}  

Meal.propTypes = {

}

export default Meal
