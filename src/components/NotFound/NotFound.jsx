import React from 'react'
import './NotFound.css';

const NotFound = ( { message } ) => {
    return (
        <div className="message-wrapper">
            { message }
        </div>
    )
}

export default NotFound
