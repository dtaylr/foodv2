import React from 'react'
import {useHistory} from 'react-router-dom'
// import MealDetail from '../pages/MealDetail'
// import ReactDOM from 'react-dom';
// import Portal from './Portal';
import { useSelector } from 'react-redux';
import MealModal from './MealModal';
// import AlertModal from './AlertModal';

// let node = null
  
const ModalWrapper = () =>{
    
    let history = useHistory();
    let mssge = useSelector(state => state.meals.alertModal);

    console.log(mssge)
  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div data-id='modalWrapper' className='modalWrapper'
        onClick={back}
        >
        <div data-cy='modal' className="modal">
          {/* {mssge ? (<AlertModal 
                      mssge={mssge}/>
                      ):( */}
                    <MealModal/>
                    {/* )} */}
             <button 
                data-cy='modal-close-btn'
                className='btn-close'
                type="button" 
                onClick={back}>
                  Close
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