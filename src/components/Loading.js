import React from 'react';
import loading from '../loading.gif';

const Loading = () => {
    return (
        <div>
            <img src={loading} 
                className='loader' 
                alt='loading spinner'
            />
        </div>
    )
}

export default Loading
