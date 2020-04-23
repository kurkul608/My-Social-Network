import React from 'react'
import loadingIMG from '../../../assets/images/loading.svg'
import classes from './preloader.module.css';

let Preloader = (props) => {
    return <img className={classes.preloader} src={loadingIMG}/>
}

export default Preloader;