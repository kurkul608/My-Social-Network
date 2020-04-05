import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs'



function DialogsContainer(props){
let state = props.store.getState();


let newMessage = () => {
    props.store.dispatch(sendMessageActionCreator())
}
let onMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(body))
}
    return(<Dialogs updateNewMessage={onMessageChange} sendMessage={newMessage}
            dialogData={state.dialogsPage.dialogData}
            messagesData={state.dialogsPage.messagesData}
            newMessageBody={state.dialogsPage.newMessageBody}/>);
    
}
export default DialogsContainer;