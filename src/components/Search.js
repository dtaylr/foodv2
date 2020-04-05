import React, {useState, useEffect} from 'react'
import { searchIt } from '../actions/mealActions'
import Filtered from '../components/Filtered'
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onChange = e => setText(e.target.value)
    const onSubmit = e => {
        e.preventDefault();
        if(text === ''){
            alert('enter some rass text');
        }else{
            (searchIt(text));
            setText('')
        }
    }
{/*Need URL TO CHANGE WITH SEARCH */}
    return (
        <div className='yeah'>
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
                <button onClick={()=> dispatch(searchIt(text))}className='btn-search'>Search</button>
            </form>
        </div>
    )
}

export default Search
