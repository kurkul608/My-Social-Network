import React from 'react';
import classes from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';
import { NavLink } from 'react-router-dom';

let newMessageElement = React.createRef();

let newMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
}

function Dialogs(props){
    
    let dialogElement = props.dialogData
        .map(d => <DialogName name={d.name} id={d.id} />);
    let messagesElement = props.messagesData
        .map(m => <Message message={m.message}/>);
    return(
        
            <div className={classes.Dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogElement}
                </div> 
                <div className={classes.Messages}>
                    {messagesElement}
                </div>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={newMessage}>SendMessage</button>
                </div>
            </div>
        
    );
    
}
export default Dialogs;