import React from 'react';
import classes from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';


function Dialogs(props){
    return(
        <div>
            <div className={classes.Dialogs}>
                <div className={classes.dialogsItems}>
                    <div className={classes.item + ' ' + classes.active}>PETR</div>
                    <DialogName className={classes.item + ' ' + classes.active} name="Petr" />
                    <DialogName className={classes.item + classes.active} name="Iuliia"/>
                    <DialogName className={classes.item + classes.active} name="Alexey"/>
                    <DialogName className={classes.item + classes.active} name="Ivan"/>
                    <DialogName className={classes.item + classes.active} name="Alla"/>
                    <DialogName className={classes.item + classes.active} name="Stanislav"/>
                    <DialogName className={classes.item + classes.active} name="Raisa"/>
                    <DialogName className={classes.item + classes.active} name="Oleg"/>
                </div> 
                <div className={classes.Messages}>
                    <Message className={classes.message} message="Hi! Thats my first web-site!"/>
                    <Message className={classes.message} message="How are you?"/>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;