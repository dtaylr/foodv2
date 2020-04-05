import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import Portal from './Portal';

let node = null

const ModalWrapper = (props) =>{
    useEffect(()=>{
        node && ReactDOM.render(<Portal {...props} />,node)
    })
    useEffect(()=>{
        node = document.createElement('div');
        document.body.appendChild(node);
        ReactDOM.render(<Portal {...props} />,node);
    },[]);
    return(
        <script />
    )
}
export default ModalWrapper