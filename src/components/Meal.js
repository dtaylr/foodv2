import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import PropTypes from 'prop-types'
import {getMeal, faved} from '../actions/mealActions';
import {TiHeartOutline} from 'react-icons/ti';
import ModalWrapper from './ModalWrapper'
import { useDispatch } from 'react-redux'

const Meal = ({rando: spoon, favs}) => {

    // useEffect(() => {
     
    // }, [])

    let location = useLocation();

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
            <p className='meal-cat'>{strCategory}</p>
            <p>{strArea}</p>
                <i onClick={()=> dispatch(faved(favs, spoon))} className='faved'><TiHeartOutline/></i>
            <button className='btn-detail' onClick={()=>dispatch(getMeal(spoon))}>
                {/* <Link to={{pathname: `/meals/${idMeal}`, state: {background: location}}}>View More</Link>  */}
                <Link to={`/meals/${idMeal}`}>View More</Link>  {/*link to PDP */} 
            </button>
            <button onClick={openModal} className='modal-btn'>Quick View</button>
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
