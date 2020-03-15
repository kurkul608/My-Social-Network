import React from 'react';
import classes from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';
import { NavLink } from 'react-router-dom';




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
            </div>
        
    );
    
}
export default Dialogs;