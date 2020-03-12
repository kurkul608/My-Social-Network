import React from 'react';
import classes from './DialogName.module.css'

function DialogName(props){
    return(
        <div className={classes.item}>
            {props.name}
        </div>
    );
}
export default DialogName;