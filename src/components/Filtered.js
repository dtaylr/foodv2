import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ModalWrapper from './ModalWrapper';
import {TiHeartOutline} from 'react-icons/ti';
import {getMeal} from '../actions/mealActions';
import { useDispatch } from 'react-redux'


const Filtered = ({currentMeals: spoon}) => {

    const dispatch = useDispatch()
        
    const {
    idMeal,
    strMeal,
    strDrinkAlternate,
    strCategory,strArea,
    strInstructions,
    strMealThumb,
    } = spoon

    const [open,setOpen] = useState(false)
    
    const openModal = () => {          
    setOpen(true)
    }

    const onCloseModal = () =>{
    setOpen(false)
    }

    return (
        <div>
            {/* {currentMeals.map(meal => ( <div key={meal.idMeal}>
                   <h3 className='meal-title'>{meal.strMeal}</h3>
                    <div className='imgContainer'>
                        <img className='meal-viz' src={meal.strMealThumb} alt={meal.strMeal}/>
                    </div>
                    <p className='meal-cat'>{meal.strCategory}</p>
                    <p>{meal.strArea}</p>
                    <button className='btn-detail' onClick={()=>dispatch(getMeal(meal))}> */}
                        {/* <Link to={{pathname: `/meals/${meal.idMeal}`, state: {background: location}}}>View More</Link>  */}
                        {/* <Link to={`/meals/${meal.idMeal}`}>View More</Link>  
                    </button>
                    <button onClick={openModal} className='modal-btn'>Quick View</button> 
                </div>
            ))} */}
            <h3 className='meal-title'>{strMeal}</h3>
            <div className='imgContainer'>
                <img className='meal-viz' src={strMealThumb} alt={strMeal}/>
            </div>
            <p className='meal-cat'>{strCategory}</p>
                <p>{strArea}</p>
            <button className='btn-detail' onClick={()=>dispatch(getMeal(spoon))}>
                {/* <Link to={{pathname: `/meals/${idMeal}`, state: {background: location}}}>View More</Link>  */}
                <Link to={`/meals/${idMeal}`}>View More</Link>  
                    <i className='faved'><TiHeartOutline/></i>
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

export default Filtered
