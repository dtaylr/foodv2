import React from 'react'
import {useHistory} from 'react-router-dom'
import MealDetail from '../pages/MealDetail'
// import ReactDOM from 'react-dom';
// import Portal from './Portal';
import { useSelector } from 'react-redux';
import MealModal from './ MealModal';

// let node = null
  
const ModalWrapper = props =>{
    
    let history = useHistory();
    let mealId = useSelector(state => state.meals.mealId);
  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div className='modalWrapper'
        onClick={back}
        >
        <div className="modal">
            <MealModal/> 
            {/* <MealDetail/> */}
            <button 
              className='btn-close'
              type="button" 
              onClick={back}>Close
            </button>   
        </div>
      </div>
    );

    // useEffect(()=>{
    //     node && ReactDOM.render(<Portal {...props} />,node)
    // })
    // useEffect(()=>{
    //     node = document.createElement('div');
    //     document.body.appendChild(node);
    //     ReactDOM.render(<Portal {...props} />,node);
    // },[]);
    // return(
    //     <script />
    // )
}
export default ModalWrapper