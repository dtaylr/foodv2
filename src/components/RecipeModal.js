import React from 'react';
import ReactModal from 'react-modal';
import RecipeDetail from '../pages/RecipeDetail';
import { closeModal } from '../actions/recipeActions';
import { useSelector, useDispatch } from 'react-redux'

const RecipeModal = () => {

    const recipe = useSelector(state => state.recipes.selectedRecipe)
    const open = useSelector(state => state.recipes.showModal)

    const dispatch = useDispatch()

    const closeIt = () => dispatch(closeModal)

    console.log(open)
    
    return (
        <ReactModal 
            isOpen={open}
            onRequestClose={closeIt}
            ariaHideApp={false}
            shouldCloseOnOverlayClick={true}
            >
            <button onClick={closeIt}>Close</button>
            <RecipeDetail recipe={recipe}/>
        </ReactModal>
    )
}

export default RecipeModal
