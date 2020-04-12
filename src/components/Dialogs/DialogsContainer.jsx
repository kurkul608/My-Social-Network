import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/auth-redirect';
import { compose } from 'redux';


class DialogsContainer extends React.Component {

    render() {
        if (!this.props.isAuth) return <Redirect to='/login' />
        return <Dialogs 
        dialogData={this.props.dialogData}
        messagesData={this.props.messagesData}
        newMessageBody={this.props.newMessageBody}
        sendMessage={this.props.sendMessageActionCreator}
        updateNewMessage={this.props.updateNewMessageBodyActionCreator}/>
    }
}



let mapStateToProps =(state) => {
    return {
        dialogData: state.dialogsPage.dialogData,
        messagesData: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody,
    }

}

export default  compose(connect(mapStateToProps, {updateNewMessageBodyActionCreator, sendMessageActionCreator}), WithAuthRedirect)(DialogsContainer)