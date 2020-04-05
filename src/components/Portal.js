import React from 'react'
import {useSelector} from 'react-redux'
import {useHistory, useParams} from 'react-router-dom';
import MealDetail from '../pages/MealDetail'
// import './style.css'

// const Portal = ({rando}) => {

//     // const rando = useSelector(state=>state.meals.prodId);

//     console.log(rando);

// 	let history = useHistory()


// 	console.log(history)
// 	console.log(rando)
// 	// console.log(item)

// 	let back = e => {
// 		e.stopPropagation()
// 		history.goBack()
// 	}

// 	return (
// 		<div
//         onClick={back}
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           background: "rgba(0, 0, 0, 0.15)"
//         }}
//       >
// 		<div className='modal'>
// 			{/* <MealDetail rando={rando}/> */}
// 		</div>
// 	</div>
// 	)
// }

// export default Portal

const Portal = ({open,close,modalText, name, category, foto, area, }) =>{
    const classModal = open ? "modal--open" : "modal--close"

    // const prodId = useSelector(state => state.meals.prodId);

    return(
        <div className={classModal}>
            <div className="modal">
                <span className="close" onClick={close}>X</span>
                    <h2 className='modal-title'>{name}</h2>
                    <p className='modal-cat'>{category}</p>
                    <img className='modal-img' src={foto} alt={name}/>
                    <p className='modal-title'>{area}</p>
                <span className="modalText">{modalText}</span>
            </div>
        </div>
    )
}

export default Portal