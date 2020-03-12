import React from 'react';
import classes from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';
import { NavLink } from 'react-router-dom';




function Dialogs(props){
    let dialogData = [
        {name: 'Petr', id: 1}, 
        {name: 'Iuliia', id: 2},
        {name: 'Alexey', id: 3},
        {name: 'Ivan', id:4},
        {name:'Alla', id: 5},
        {name: 'Stanislav', id: 6},
        {name: 'Vladimir', id: 7},
        {name: 'Oleg', id: 8},
        {name: 'Mew', id: 9}
    ]
    let dialogElement = dialogData
        .map(d => <DialogName name={d.name} id={d.id} />);
    
    
        let messagesData = [
        {message: 'Hi! Thats my first web-site!'},
        {message: 'How are you?'}
    ]
    let messagesElement = messagesData
        .map(m => <Message message={m.message}/>);
    return(
        
            <div className={classes.Dialogs}>
                <div className={classes.dialogsItems}>
                    {/* <DialogName name={dialogData[0].name} id={dialogData[0].id}/> */}
                    {dialogElement}
                </div> 
                <div className={classes.Messages}>
                    {messagesElement}
                    {/* <Message message={messagesData[0].message}/> */}
                </div>
            </div>
        
    );
    
}
export default Dialogs;