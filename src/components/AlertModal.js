import React from 'react'
// import {useSelector} from 'react-redux';

const AlertModal = ({mssge}) => {
    
    return (
        <div className='alert-mssge-container'>
            <p className='message'>{mssge}</p>
        </div>
    )
}

export default AlertModal
