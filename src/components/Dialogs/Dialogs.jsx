import React from 'react';
import classes from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';



function Dialogs(props){
    
    let newMessageElement = React.createRef();

let newMessage = () => {
    props.sendMessage();
}
let onMessageChange = () => {
    let body = newMessageElement.current.value;
    props.updateNewMessage(body);
}


    let dialogElement = props.dialogData
        .map(d => <DialogName name={d.name} key={d.id} id={d.id} />);
    let messagesElement = props.messagesData
        .map(m => <Message message={m.message} key={m.id}/>);
    return(
        
            <div className={classes.Dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogElement}
                </div> 
                <div className={classes.Messages}>
                    {messagesElement}
                    <div>
                    <textarea onChange={onMessageChange}  ref={newMessageElement} value={props.newMessageBody}></textarea>
                    <button onClick={newMessage}>Send Message</button>
                </div>
                </div>
                
            </div>
        
    );
    
}
export default Dialogs;