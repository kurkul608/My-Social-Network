import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';



let mapStateToProps =(state) => {
    return {
        dialogData: state.dialogsPage.dialogData,
        messagesData: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }

}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;