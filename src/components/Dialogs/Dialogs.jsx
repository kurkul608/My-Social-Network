import React from 'react';
import classes from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';
import {reduxForm, Field} from 'redux-form'
import { Textarea } from '../common/preloader/FormsControls/FormsControls';
import { requiredField, maxLenghtCreator } from '../../utils/validators/validators';



const maxLength100 = maxLenghtCreator(100)

function Dialogs(props){
    let dialogElement = props.dialogData
        .map(d => <DialogName name={d.name} key={d.id} id={d.id} />);
    let messagesElement = props.messagesData
        .map(m => <Message message={m.message} key={m.id}/>);

    const onSubmit = (formData) => {
        props.sendMessage(formData.newMessage); 
    }

    return(
        
            <div className={classes.Dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogElement}
                </div> 
                <div className={classes.Messages}>
                    {messagesElement}
                    <MessageReduxStore onSubmit={onSubmit}/>                                        
                </div>
                
            </div>
        
    );
    
}
const AddMessageForm = (props) =>{
    return <form onSubmit={props.handleSubmit}>
    <div>
        <div>
            <Field placeholder={'Введите новое сообщение'} name={'newMessage'} component={Textarea} validate={[requiredField, maxLength100]} />
        </div>
        <div>
            <button>Send Message</button>
        </div>
        
    </div>
</form>
}

const MessageReduxStore = reduxForm ({form: 'dialogAddMessageForm'}) (AddMessageForm)
export default Dialogs;