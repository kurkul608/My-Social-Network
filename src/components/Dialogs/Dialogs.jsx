import React from 'react';
import classes from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../Redux/dialogs-reducer';



function Dialogs(props){
    
    let newMessageElement = React.createRef();

let newMessage = () => {
    props.dispatch(sendMessageActionCreator())
}
let onMessageChange = () => {
    let body = newMessageElement.current.value;
    props.dispatch(updateNewMessageBodyActionCreator(body))
}


    let dialogElement = props.dialogsPage.dialogData
        .map(d => <DialogName name={d.name} id={d.id} />);
    let messagesElement = props.dialogsPage.messagesData
        .map(m => <Message message={m.message}/>);
    return(
        
            <div className={classes.Dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogElement}
                </div> 
                <div className={classes.Messages}>
                    {messagesElement}
                    <div>
                    <textarea onChange={onMessageChange}  ref={newMessageElement} value={props.dialogsPage.newMessageBody}></textarea>
                    <button onClick={newMessage}>Send Message</button>
                </div>
                </div>
                
            </div>
        
    );
    
}
export default Dialogs;