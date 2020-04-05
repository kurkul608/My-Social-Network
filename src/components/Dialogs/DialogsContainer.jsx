import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs'



function DialogsContainer(props){
let state = props.store.getState();


let newMessage = () => {
    props.dispatch(sendMessageActionCreator())
}
let onMessageChange = (body) => {
    props.dispatch(updateNewMessageBodyActionCreator(body))
}
    return(<Dialogs updateNewMessage={onMessageChange} sendMessage={newMessage}
            dialogData={state.dialogsPage.dialogData}
            messagesData={state.dialogsPage.messagesData}
            newMessageBody={state.dialogsPage.newMessageBody}/>);

    // let dialogElement = props.dialogsPage.dialogData
    //     .map(d => <DialogName name={d.name} id={d.id} />);
    // let messagesElement = props.dialogsPage.messagesData
    //     .map(m => <Message message={m.message}/>);
    // return(
        
    //         <div className={classes.Dialogs}>
    //             <div className={classes.dialogsItems}>
    //                 {dialogElement}
    //             </div> 
    //             <div className={classes.Messages}>
    //                 {messagesElement}
    //                 <div>
    //                 <textarea onChange={onMessageChange}  ref={newMessageElement} value={props.dialogsPage.newMessageBody}></textarea>
    //                 <button onClick={newMessage}>Send Message</button>
    //             </div>
    //             </div>
                
    //         </div>
        
    // );
    
}
export default DialogsContainer;