import React, {useState} from 'react'
import { searchIt } from '../actions/mealActions'
import { useDispatch } from 'react-redux';

const Search = ({mealz}) => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onChange = e => setText(e.target.value)
    const onSubmit = e => {
        e.preventDefault();
        if(text === ''){
            alert('Please enter a meal to');
        }else{
            (searchIt(text));
            setText('')
        }
    }
/*Need URL TO CHANGE WITH SEARCH */
    return (
        <div className='yeah'>
            <h3 className='search-title'>Meal Search</h3>
            <form className='searchCont' onSubmit={onSubmit}>
                <input 
                    type='text' 
                    className='searchBar' 
                    onChange={onChange} 
                    value={text} 
                    placeholder='enter a meal' 
                    name='search'
                />
                {/* <button onClick={()=> dispatch(search())}>Search</button> */}
                <button onClick={()=> dispatch(searchIt(text, mealz))}className='btn-search'>Search</button>
            </form>
        </div>
    )
}

export default Search
