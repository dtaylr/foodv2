import React from 'react';
import loading from '../loading.gif';
import PropTypes from 'prop-types'

const Loading = () => {
    return (
        <div>
            <img src={loading} 
                className='loading' 
                alt='loading spinner'
            />
        </div>
    )
}

Loading.propTypes = {

}

export default Loading
