import React from 'react';
import loading from '../loading.gif';

const Loading = () => {
    return (
        <div>
            <img src={loading} 
               data-class='loader' className='loader' 
                alt='loading spinner'
            />
        </div>
    )
}

export default Loading
