import React from 'react';

const Message = ({message}) => {
    return (
        <div className="container-fluid d-flex justify-content-around p-3 message">
            <h4 className="message">{message}</h4>
        </div>
    );
};


export default Message;