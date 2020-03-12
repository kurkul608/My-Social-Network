import React from 'react';
import classes from './Message.module.css';

function Message(props){
    return(
        <div>
            {props.message}
        </div>
    );
}
export default Message;