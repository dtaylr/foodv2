import React, {useState} from 'react'
import { searchIt } from '../actions/mealActions'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'

const Search = () => {

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
    return (
        <div className='yeah'>
            {/* <h3 className='search-title'>Meal Search</h3> */}
            <form className='searchCont' onSubmit={onSubmit}>
                <input 
                    type='text' 
                    className='searchBar' 
                    onChange={onChange} 
                    value={text} 
                    placeholder='enter a meal' 
                    name='search'
                />
                <button 
                    onClick={()=> dispatch(searchIt(text))}
                    className='btn-search'
                >
                    <Link to={`/search?q=${text}`}>Search
                    </Link>
                </button>  
            </form>
        </div>
    )
}

export default Search
